import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
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
import { IChart } from 'src/app/core/models/chart';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';
import { ModuleEnum } from 'src/app/core/enums/module-enum';

@UntilDestroy()
@Component({
  selector: 'vex-chart-table',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss'],
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

export class ChartListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IChart>[] = [
    { label: 'Major Account Group', property: 'acountGroup', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Sub-Major Account Group', property: 'subAcountGroup', type: 'text', visible: true },
    { label: 'Rca Gl Account', property: 'rcaGL', type: 'text', visible: true },
    { label: 'Rca Sl Account', property: 'rcaSL', type: 'text', visible: true },
    { label: 'Rca Ledger Title', property: 'rcaLedgerTitle', type: 'text', visible: true },
    { label: 'Status', property: 'isActive', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IChart[]> = new ReplaySubject<IChart[]>(1);
  data$: Observable<IChart[]> = this.subject$.asObservable();
  charts: IChart[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IChart> | null;
  selection = new SelectionModel<IChart>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;
  isListLoading = false;
  hasCreateAccess: boolean = false;
  hasUpdateAccess: boolean = false;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _router: Router,
    private _portalService: PortalService,
    private _securityService: SecurityService
  ){
    const userId = parseInt(localStorage.getItem('user_id'));
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const listPermission = data.filter(a => a.moduleId === ModuleEnum.ChartofAccounts);
        const rolePermission = data.filter(a => a.moduleId === ModuleEnum.AddorEditChartOfAccounts);
        if (listPermission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        this.hasCreateAccess = rolePermission.some(s => s.isCreate);
        this.hasUpdateAccess = rolePermission.some(s => s.isUpdate);
      });
  }

  ngOnInit(): void {
    this._portalService.getChartAccounts()
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
      .pipe(filter<IChart[]>(Boolean))
      .subscribe(charts => {
        this.totalCount = charts.length;
        this.charts = charts;
        this.dataSource.data = charts;
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
    this._router.navigate([`apps/chart-accounts/edit/${chart.id}`]);
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