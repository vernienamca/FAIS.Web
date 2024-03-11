import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { aioTableLabels } from '../../../../../static-data/aio-table-data';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import { PortalService } from 'src/app/core/services/portal.service';
import { IAuditLogs } from 'src/app/core/models/audit-logs';
import { SharedLinkDialogComponent } from '../shared-link-dialog/shared-link-dialog.component';
import { SecurityService } from 'src/app/core/services/security.service';

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
    { label: 'Date & Time', property: 'createdAt', type: 'text', visible: true },
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
  dataSource: MatTableDataSource<IAuditLogs> | null;
  selection = new SelectionModel<IAuditLogs>(true, []);
  searchCtrl = new UntypedFormControl();
  logs: IAuditLogs[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  labels = aioTableLabels;      
  isListLoading = true;                                              
  users = [];

  private _onDestroy$ = new Subject<void>();

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
    private _securityService: SecurityService
  ) {
  }

  ngOnInit(): void {
    this._portalService.getAuditLogs()
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
      .pipe(filter<IAuditLogs[]>(Boolean))
      .subscribe(logs => {
        this.totalCount = logs.length;
        this.logs = logs;
        this.dataSource.data = logs;
        this.users = logs.map(function(a) {return a.createdBy;}).filter((value, index, self) => self.indexOf(value) === index);
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

  onFilterChange(value: string): void {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column: any, event: any): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  exportAuditLogs(): void {
    this._portalService.exportAuditLogs();
  }

  openSharedFolderLink(): void {
    this._securityService.getSettings(1)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this._dialog.open(SharedLinkDialogComponent, {
          data: data.auditLogsFilePath,
          width: '700px',
          disableClose: true
        });
      });
  }

  onFilterUser(event: any): void {
    if (!event.value) {
      this.dataSource.data = this.logs;
      return;
    }
    this.dataSource.data = this.logs.filter(t => t.createdBy === event.value);
  }
}