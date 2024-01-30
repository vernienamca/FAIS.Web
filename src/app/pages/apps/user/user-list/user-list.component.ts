import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
import { IUser } from 'src/app/core/models/user';
import { UserStatusEnum } from 'src/app/core/enums/user-status.enum';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
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
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IUser>[] = [
    { label: 'Image', property: 'photo', type: 'image', visible: true },
    { label: 'Username', property: 'userName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'First Name', property: 'firstName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Last Name', property: 'lastName', type: 'text', visible: true },
    { label: 'Position', property: 'position', type: 'text', visible: true },
    { label: 'Division', property: 'division', type: 'text', visible: true },
    { label: 'TA-FG', property: 'tafGs', type: 'badge', visible: true },
    { label: 'OUP-FG', property: 'oufg', type: 'badge', visible: true },
    { label: 'Status', property: 'status', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IUser[]> = new ReplaySubject<IUser[]>(1);
  data$: Observable<IUser[]> = this.subject$.asObservable();
  customers: IUser[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IUser> | null;
  selection = new SelectionModel<IUser>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;
  userStatusEnum = UserStatusEnum;

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _portalService: PortalService,
    private _router: Router
  ) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this._portalService.getUsers()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        console.log(data);
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IUser[]>(Boolean))
      .subscribe(customers => {
        this.totalCount = customers.length;
        this.customers = customers;
        this.dataSource.data = customers;
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

  add() {
    this._router.navigate(['user/add']);
  }
  
  edit(user: any): void {
    this._router.navigate([`apps/users/edit/${user.id}`]);
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

  onLabelChange(change: MatSelectChange, row: IUser) {
    const index = this.customers.findIndex(c => c === row);
    //this.customers[index].labels = change.value;
    this.subject$.next(this.customers);
  }
}
