import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable,ReplaySubject, Subject, finalize, takeUntil, map } from 'rxjs';
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
import { IAmr100 } from 'src/app/core/models/amr-100';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AmrReportDialogComponent } from '../amr-form-100-report-sequence/amr-report-dialog.component';

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
  columns: TableColumn<IAmr100>[] = [
    { label: 'Report_Seq', property: 'id', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'AMR Year and Month', property: 'amrYm', type: 'text', visible: true },
    { label: 'Received by TransCo', property: 'dateReceivedTransco', type: 'text', visible: true },
    { label: 'Received by ARMPMD', property: 'dateReceivedArmPmd', type: 'text', visible: true },
    { label: 'Sent for Encoding', property: 'dateSentEncoding', type: 'text', visible: true },
    { label: 'No. of Binders', property: 'noOfBinders', type: 'text', visible: true},
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IAmr100[]> = new ReplaySubject<IAmr100[]>(1);
  data$: Observable<IAmr100[]> = this.subject$.asObservable();
  profiles: IAmr100[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IAmr100> | null;
  selection = new SelectionModel<IAmr100>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;
  isListLoading = false;
  isEditMode: boolean = false;
  isViewMode: boolean = false;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor (
    private _router: Router,
    private _portalService: PortalService,
    private _datePipe: DatePipe,
    private _dialog: MatDialog
  ) { 
  }

  ngOnInit(): void {
    this._portalService.getAssetMovementReports()
    .pipe(
      takeUntil(this._onDestroy$),
      finalize(() => this.isListLoading = false)
    )
    .subscribe(data => {
      if (!data) {
        return;
      }
      const transformedData = data.map(item => ({
        ...item,
        amrYm: this._datePipe.transform(item.amrYm, 'yyyy-MM'),
        dateReceivedTransco: this._datePipe.transform(item.dateReceivedTransco, 'd-MMMM-yyyy'),
        dateReceivedArmPmd: this._datePipe.transform(item.dateReceivedArmPmd, 'd-MMMM-yyyy'),
        dateSentEncoding: this._datePipe.transform(item.dateSentEncoding, 'd-MMMM-yyyy')
      }));
      this.subject$.next(transformedData);
    });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IAmr100[]>(Boolean))
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

  exportReportLogs(): void{

  }

  createReport(): void {
    this._dialog.open(AmrReportDialogComponent, {
      height: '60vh',
      disableClose: false,
      data: {isEditMode: false, isViewMode: false }
    }).afterClosed().subscribe(result => {
     
      this._router.navigate(['/apps/amr-100']); 
    });
  }
  
  view(row: IAmr100): void {
    const amrDialog = this._dialog.open(AmrReportDialogComponent, {
      height: '60vh',
      disableClose: false,
      data: { id: row.id, isViewMode: true }
    });
    amrDialog.afterClosed().subscribe(result => {
      if (result) {
     
      }
      this._router.navigate(['/apps/amr-100']); 
    });
  
    this._router.navigate([`/apps/amr-100/edit/${row.id}`]); 
  }

  edit(row: IAmr100): void {
    const amrDialog = this._dialog.open(AmrReportDialogComponent, {
      height: '60vh',
      disableClose: false,
      data: { id: row.id, isEditMode: true, isViewMode: false }
    });
  
    amrDialog.afterClosed().subscribe(result => {
      if (result) {
    
      }
      this._router.navigate(['/apps/amr-100']); 
    });
  
    this._router.navigate([`/apps/amr-100/edit/${row.id}`]); 
  }
  
  encoding(row: IAmr100): void {

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