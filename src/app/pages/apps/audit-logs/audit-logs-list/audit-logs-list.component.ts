import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { aioTableData, aioTableLabels } from '../../../../../static-data/aio-table-data';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import { PortalService } from 'src/app/core/services/portal.service';
import { IAuditLogs } from 'src/app/core/models/audit-logs';

@UntilDestroy()
@Component({
  selector: 'vex-aio-table',
  templateUrl: './audit-logs-list.component.html',
  styleUrls: ['./audit-logs-list.component.scss'],
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
export class AuditLogsListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IAuditLogs>[] = [
    { label: 'Date & Time', property: 'dateCreated', type: 'text', visible: true },
    { label: 'User', property: 'createdBy', type: 'text', visible: true },
    { label: 'Activity', property: 'activity', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Module Name', property: 'moduleName', type: 'text', visible: true },
    { label: 'Old Value', property: 'oldValues', type: 'text', visible: true },
    { label: 'New Value', property: 'newValues', type: 'text', visible: true },
    { label: 'IP Address', property: 'ipAddress', type: 'text', visible: true },
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IAuditLogs[]> = new ReplaySubject<IAuditLogs[]>(1);
  data$: Observable<IAuditLogs[]> = this.subject$.asObservable();
  logs: IAuditLogs[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IAuditLogs> | null;
  selection = new SelectionModel<IAuditLogs>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
  ) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this._portalService.getAuditLogs()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IAuditLogs[]>(Boolean))
      .subscribe(logs => {
        this.totalCount = logs.length;
        this.logs = logs;
        this.dataSource.data = logs;
      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: IAuditLogs) {
    const index = this.logs.findIndex(c => c === row);
    this.subject$.next(this.logs);
  }

  exportAuditLogs(){
    this._portalService.exportAuditLogs();
  }
}
