import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { FormGroup, UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PortalService } from 'src/app/core/services/portal.service';
import { IAuditLogs } from 'src/app/core/models/audit-logs';

@UntilDestroy()
@Component({
  selector: 'app-user-activity-list',
  templateUrl: './user-activity-list.component.html',
  styleUrls: ['./user-activity-list.component.scss'],
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
export class UserActivityListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IAuditLogs>[] = [
    { label: 'Actions Taken', property: 'activity', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Module Name', property: 'moduleName', type: 'text', visible: true },
    { label: 'Timestamp', property: 'createdAt', type: 'text', visible: true }
  ];
  @Input() userId: number;
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IAuditLogs[]> = new ReplaySubject<IAuditLogs[]>(1);
  data$: Observable<IAuditLogs[]> = this.subject$.asObservable();
  activities: IAuditLogs[] = [];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IAuditLogs> | null;
  selection = new SelectionModel<IAuditLogs>(true, []);
  isListLoading = true;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();
  
  constructor(private _portalService: PortalService) { }

  ngOnInit(): void {
    if (!this.userId) {
      this.isListLoading = false;
      return;
    }
    this._portalService.getUserActivities(this.userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });
  
    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IAuditLogs[]>(Boolean),)
      .subscribe(data => {
        this.isListLoading = false;
        this.dataSource.data = data;
        this.totalCount = data.length;
      });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    if (!this.paginator) {
      return;
    }
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

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }
}
