import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable,ReplaySubject, Subject, finalize, takeUntil } from 'rxjs';
import { filter} from 'rxjs/operators';
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
import { Router } from '@angular/router';
import { IProjectProfile } from 'src/app/core/models/project-profile';

@UntilDestroy()
@Component({
  selector: 'vex-project-profile-table',
  templateUrl: './project-profile-list.component.html',
  styleUrls: ['./project-profile-list.component.scss'],
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

export class ProjectProfileListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IProjectProfile>[] = [
    { label: 'Project Name', property: 'projectName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Project Classification', property: 'projClassSeq', type: 'text', visible: true },
    { label: 'Project Stage', property: 'projectStageSeq', type: 'text', visible: true },
    { label: 'TPSR Month', property: 'tpsrMonth', type: 'text', visible: true },
    { label: 'No. of Components Completed', property: 'numComponentsCompleted', type: 'text', visible: true },
    { label: 'No. of Components Under Construction', property: 'numComponentUnderConstruction', type: 'text', visible: true},
    { label: 'Latest Inspection Date', property: 'latestInspectionDate', type: 'text', visible: true},
    { label: 'Total AMR Cost', property: 'totalAMRCost', type: 'text', visible: true},
    { label: 'Recorded AMR', property: 'recordedAMR', type: 'text', visible: true},
    { label: 'Unrecorded AMR', property: 'unrecordedAMR', type: 'text', visible: true},
    { label: 'Remarks', property: 'remarks', type: 'text', visible: true},
    { label: 'Status', property: 'isActive', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IProjectProfile[]> = new ReplaySubject<IProjectProfile[]>(1);
  data$: Observable<IProjectProfile[]> = this.subject$.asObservable();
  profiles: IProjectProfile[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IProjectProfile> | null;
  selection = new SelectionModel<IProjectProfile>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;
  isListLoading = false;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor (
    private _router: Router,
    private _portalService: PortalService
  ) { 
  }

  ngOnInit(): void {
    this._portalService.getProjectProfiles()
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
      .pipe(filter<IProjectProfile[]>(Boolean))
      .subscribe(profiles => {
        this.totalCount = profiles.length;
        this.profiles = profiles;
        this.dataSource.data = profiles;
      });
     
    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this._onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  edit(chart: any): void {
    this._router.navigate([`apps/asset-profile/edit/${chart.id}`]);
  }
  
  exportChartLogs(): void {
    this._portalService.exportChartLogs();
  }

  private _onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
}