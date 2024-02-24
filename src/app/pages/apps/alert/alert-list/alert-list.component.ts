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
import { IAlert } from 'src/app/core/models/alert';
import { AlertStatusEnum } from 'src/app/core/enums/alert-status.enum';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'vex-alert-table',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss'],
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
export class AlertListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IAlert>[] = [
    { label: 'ID', property: 'id', type: 'text', visible: false },
    { label: 'Subject', property: 'subject', type: 'text', visible: true },
    { label: 'Content', property: 'content', type: 'text', visible: true },
    { label: 'Receiver', property: 'receiver', type: 'text', visible: true },
    { label: 'Notification Type', property: 'type', type: 'text', visible: true },
    { label: 'Created By', property: 'createdBy', type: 'text', visible: true },
    { label: 'Date Created', property: 'createdAt', type: 'text', visible: true },
    { label: 'Status', property: 'status', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IAlert[]> = new ReplaySubject<IAlert[]>(1);
  data$: Observable<IAlert[]> = this.subject$.asObservable();
  alerts: IAlert[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IAlert> | null;
  selection = new SelectionModel<IAlert>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;      
  isListLoading = true;  

  alertStatusEnum = AlertStatusEnum;

  public filteredUsers: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  private _onDestroy$ = new Subject<void>();

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    // this._portalService.getAlert()
    //   .pipe(
    //     takeUntil(this._onDestroy$),
    //     finalize(() => this.isListLoading = false)
    //   )
    //   .subscribe(data => {
    //     if (!data) {
    //       return;
    //     }
    //     this.subject$.next(data);
    //   });
    this.isListLoading = false
var data: IAlert[]= [{
  id: 1,
  subject: "PAD Email Notification",
  status: 1,
  createdBy: null,
  createdAt: null
}];
      this.subject$.next(data);

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IAlert[]>(Boolean))
      .subscribe(alerts => {
        this.totalCount = alerts.length;
        this.alerts = alerts;
        this.dataSource.data = alerts;
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

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: IAlert): void {
    const index = this.alerts.findIndex(c => c === row);
    this.subject$.next(this.alerts);
  }
  exportAlerts(): void {
    this._portalService.exportAlerts();
  }

  add() {
    this._router.navigate(['alert/add']);
  }
  
  edit(alert: any): void {
    this._router.navigate([`apps/alerts/edit/${alert.id}`]);
  }
}