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
import { IModule } from 'src/app/core/models/module';
import { IRole } from 'src/app/core/models/role';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'vex-aio-table',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
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
export class RoleListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IRole>[] = [
    { label: 'Role Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Modified By', property: 'updatedBy', type: 'text', visible: true },
    { label: 'Date Modified', property: 'updatedAt', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IRole[]> = new ReplaySubject<IRole[]>(1);
  data$: Observable<IRole[]> = this.subject$.asObservable();
  roles: IRole[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IRole> | null;
  selection = new SelectionModel<IRole>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
    private _router: Router,
  ) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this._portalService.getRoles()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IRole[]>(Boolean))
      .subscribe(customers => {
        this.totalCount = customers.length;
        this.roles = customers;
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

  createCustomer() {
    // this._dialog.open(CustomerCreateUpdateComponent).afterClosed().subscribe((customer: Customer) => {
    //   /**
    //    * Customer is the updated customer (if the user pressed Save - otherwise it's null)
    //    */
    //   if (customer) {
    //     /**
    //      * Here we are updating our local array.
    //      * You would probably make an HTTP request here.
    //      */
    //     this.customers.unshift(new Customer(customer));
    //     this.subject$.next(this.customers);
    //   }
    // });
  }

  view(data: any) {
    this._router.navigate([`apps/roles/${data.id}`]);
  }

  deleteCustomer(customer: any) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    // this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
    // this.selection.deselect(customer);
    // this.subject$.next(this.customers);
  }

  deleteCustomers(customers: any[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    customers.forEach(c => this.deleteCustomer(c));
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

  onLabelChange(change: MatSelectChange, row: IModule) {
    const index = this.roles.findIndex(c => c === row);
    //this.customers[index].labels = change.value;
    this.subject$.next(this.roles);
  }
}
