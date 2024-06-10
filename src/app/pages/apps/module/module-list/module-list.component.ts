import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, finalize, map, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IModule } from 'src/app/core/models/module';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';
import { Store } from '@ngxs/store';
import { SystemManagementState } from 'src/app/shared/store/system-management/system-management.state';
import { GetModules } from 'src/app/shared/store/system-management/system-management.action';

@UntilDestroy()
@Component({
  selector: 'vex-aio-table',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss'],
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
export class ModuleListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
    columns: TableColumn<IModule>[] = [
      { label: 'Module Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
      { label: 'Modified By', property: 'updatedBy', type: 'text', visible: true },
      { label: 'Date Modified', property: 'updatedAt', type: 'text', visible: true },
      { label: 'Action', property: 'actions', type: 'button', visible: true }
    ];
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IModule[]> = new ReplaySubject<IModule[]>(1);
  data$: Observable<IModule[]> = this.subject$.asObservable();
  isLoading$ = new BehaviorSubject<boolean>(false);
  totalCount$ = new BehaviorSubject<number>(0);
  dataSource: MatTableDataSource<IModule> | null;
  searchCtrl = new UntypedFormControl();
  hasUpdateAccess = false;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _store: Store,
    private _router: Router,
    private _securityService: SecurityService
  ) {
    this.dataSource = new MatTableDataSource();
    const userId = parseFloat(localStorage.getItem('user_id'));
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.find(a => a.moduleId === 2);
        if (!permission?.isRead) {
          this._router.navigate([`pages/error-401`]);
        }
        this.hasUpdateAccess = permission.isUpdate;
      });
  }

  ngOnInit(): void {
    this._store.dispatch(new GetModules())
    .pipe(
      map(() => this._store.selectSnapshot(SystemManagementState.getModules)),
      finalize(() =>  this.isLoading$.next(false)),
      takeUntil(this._onDestroy$)
    ).subscribe((modules: IModule[]) => {
      if (!modules) {
        return;
      }
      this.subject$.next(modules);
      this.totalCount$.next(this.dataSource.filteredData.length);
      this.isLoading$.next(false);
    });

    this.data$.pipe(
      filter<IModule[]>(Boolean),
      takeUntil(this._onDestroy$)
    ).subscribe(data => {
      if (!data) {
        return;
      }
      this.dataSource.data = data;
    });
    this.searchCtrl.valueChanges.pipe(untilDestroyed(this))
      .subscribe(value => this._onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  edit(module: IModule): void {
    if (!module) {
      return;
    }
    this._router.navigate([`apps/modules/edit/${module.id}`]);
  }

  toggleColumnVisibility(column: TableColumn<IModule>, event: MouseEvent): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  private _onFilterChange(value: string): void {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
    this.totalCount$.next(this.dataSource.filteredData.length);
  }
}
