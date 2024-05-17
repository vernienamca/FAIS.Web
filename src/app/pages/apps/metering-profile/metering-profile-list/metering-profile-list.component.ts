import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { aioTableLabels } from '../../../../../static-data/aio-table-data';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PortalService } from 'src/app/core/services/portal.service';
import { IMeteringProfile } from 'src/app/core/models/metering-profile';
import { MeteringProfileStatusEnum } from 'src/app/core/enums/metering-profile-status.enum';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { Module } from 'module';

@UntilDestroy()
@Component({
  selector: 'vex-aio-table',
  templateUrl: './metering-profile-list.component.html',
  styleUrls: ['./metering-profile-list.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class MeteringProfileListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IMeteringProfile>[] = [
    { label: 'Metering Point Name', property: 'meteringPointName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Customer', property: 'customer', type: 'text', visible: true },
    { label: 'Type of Installation', property: 'installationTypeDescription', type: 'text', visible: true },
    { label: 'Metering Class', property: 'meteringClassDescription', type: 'text', visible: true },
    { label: 'Transmission Grid', property: 'transGridDescription', type: 'text', visible: true },
    { label: 'District Office', property: 'adRegionSeq', type: 'text', visible: true },
    { label: 'Facility Location', property: 'facilityLocationDescription', type: 'text', visible: true },
    { label: 'Line Segment', property: 'lineSegment', type: 'text', visible: true },
    { label: 'Status', property: 'isActive', type: 'text', visible: true },
    { label: 'Action', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IMeteringProfile[]> = new ReplaySubject<IMeteringProfile[]>(1);
  data$: Observable<IMeteringProfile[]> = this.subject$.asObservable();
  meteringProfiles: IMeteringProfile[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IMeteringProfile> | null;
  selection = new SelectionModel<IMeteringProfile>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;
  isListLoading = true;
  isEditMode: boolean = false;
  meteringProfileStatusEnum = MeteringProfileStatusEnum;
  hasCreateAccess: boolean = false;
  hasUpdateAccess: boolean = false;


  private _onDestroy$ = new Subject<void>();

  constructor(
    private _portalService: PortalService,
    private _router: Router,
    private _securityService: SecurityService
  ) {
    const userId = parseFloat(localStorage.getItem('user_id'));
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const listPermission = data.filter(a => a.moduleId === ModuleEnum.MeteringProfile);
        const MeteringPermission = data.filter(a => a.moduleId === ModuleEnum.AddorEditMeteringProfile);
        if (listPermission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        this.hasCreateAccess = MeteringPermission.some(s => s.isCreate);
        this.hasUpdateAccess = MeteringPermission.some(s => s.isUpdate);
      });
    
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit(): void {
    this._portalService.getMeteringProfiles()
      .pipe(
        takeUntil(this._onDestroy$),
        finalize(() => this.isListLoading = false)
      )
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IMeteringProfile[]>(Boolean))
      .subscribe(customers => {
        this.totalCount = customers.length;
        this.meteringProfiles = customers;
        this.dataSource.data = customers;
      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  view(data: any): void {
    this._router.navigate([`apps/metering-profile/edit/${data.id}`]);
  }

  add(): void {
    this._router.navigate(['apps/metering-profile/add']);
  }

  onFilterChange(value: string): void {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }
}
