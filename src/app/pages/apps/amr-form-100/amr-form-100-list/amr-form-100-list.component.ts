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
import { IAssetProfile } from 'src/app/core/models/asset-profile';

@UntilDestroy()
@Component({
  selector: 'vex-movement-report-form-table',
  templateUrl: './amr-form-100-list.component.html',
  styleUrls: ['./amr-form-100-list.component.scss'],
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

export class AssetMovementReportListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IAssetProfile>[] = [
    { label: 'Report_Seq', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'AMR Year and Month', property: 'category', type: 'text', visible: true },
    { label: 'Received by TransCo', property: 'rcaGLId', type: 'text', visible: true },
    { label: 'Received by ARMPMD', property: 'rcaslId', type: 'text', visible: true },
    { label: 'Sent for Encoding', property: 'economicLife', type: 'text', visible: true },
    { label: 'No. of Binders', property: 'residualLife', type: 'text', visible: true},
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IAssetProfile[]> = new ReplaySubject<IAssetProfile[]>(1);
  data$: Observable<IAssetProfile[]> = this.subject$.asObservable();
  profiles: IAssetProfile[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IAssetProfile> | null;
  selection = new SelectionModel<IAssetProfile>(true, []);
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
    this._portalService.getAssetProfiles()
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
      .pipe(filter<IAssetProfile[]>(Boolean))
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

  edit(chart: any): void {
    this._router.navigate([`apps/asset-profile/edit/${chart.id}`]);
  }
  
  exportChartLogs(): void {
    this._portalService.exportChartLogs();
  }

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
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