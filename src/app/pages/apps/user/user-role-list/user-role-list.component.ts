import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, finalize, takeUntil } from 'rxjs/operators';
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
import { IRole } from 'src/app/core/models/role';
import { IUser, IUserRole } from 'src/app/core/models/user';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleDialogComponent } from '../add-role-dialog/add-role-dialog.component';
import { SecurityService } from 'src/app/core/services/security.service';
import { DatePipe } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-user-role-list',
  templateUrl: './user-role-list.component.html',
  styleUrls: ['./user-role-list.component.scss'],
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
export class UserRoleListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input() 
  set data(value: IUserRole[]) {
    this.subject$.next(value);
  };
  @Input()
  columns: TableColumn<IUserRole>[] = [
    { label: 'Role Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Date Added', property: 'createdAt', type: 'text', visible: true },
    { label: 'Action', property: 'actions', type: 'button', visible: true }
  ];
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IUserRole[]> = new ReplaySubject<IUserRole[]>(1);
  data$: Observable<IUserRole[]> = this.subject$.asObservable();
  roles: IRole[] = [];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IUserRole> | null;
  selection = new SelectionModel<IUserRole>(true, []);
  searchCtrl = new UntypedFormControl();
  userId: number;
  isListLoading = true;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _userRoles: IUserRole[] = [];
  private _onDestroy$ = new Subject<void>();
  
  constructor(
    private _portalService: PortalService,
    private _securityService: SecurityService,
    private _datePipe: DatePipe,
    private _dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('user_id'));
    this._getRoles();
    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IUserRole[]>(Boolean),)
      .subscribe(data => {
        this.isListLoading = false;
        this._userRoles = data;
        this.dataSource.data = this._userRoles;
        this.totalCount = this._userRoles.length;
        this._portalService.userRoleIds$.next(this._userRoles.map(m => m.id));
      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));

    this._portalService.addedUserRole$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        if (this._userRoles.some(t => t.id === data.id)) {
          return;
        }
        this._userRoles.push(data);
        this.dataSource.data = this._userRoles;
        this._portalService.userRoleIds$.next(this._userRoles.map(m => m.id));
        this._securityService.userRoles$.next(this._userRoles);
      });
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

  onToggleStatus($event: any, id: number): void {
    const userRole = this._userRoles.find(t => t.id === id);
    userRole.isActive = $event.checked;
    userRole.statusDate = $event.checked ? `${this._datePipe.transform(new Date(), 'short')}` : null;
    userRole.updatedBy = this.userId;
  }

  addRole(): void {
    this._dialog.open(AddRoleDialogComponent, {
      data: {
        userRoleIds: this._userRoles.map(m => m.id),
        roles: this.roles
      },
      width: '700px'
    });
  }

  private _getRoles(): void {
    this._portalService.getRoles()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        this.roles = data;
      });
  }
}
