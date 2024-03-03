import { AfterViewInit, Component, EventEmitter, Inject, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, ReplaySubject, Subject, filter, finalize, map, takeUntil } from "rxjs";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { IRole } from "src/app/core/models/role";
import { IUserRole } from "src/app/core/models/user";
import { PortalService } from "src/app/core/services/portal.service";

@UntilDestroy()
@Component({
  selector: 'add-role-dialog',
  templateUrl: './add-role-dialog.component.html',
  styleUrls: ['./add-role-dialog.component.scss'],
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
export class AddRoleDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  columns: TableColumn<IRole>[] = [
    { label: 'Role Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  subject$: ReplaySubject<IRole[]> = new ReplaySubject<IRole[]>(1);
  data$: Observable<IRole[]> = this.subject$.asObservable();
  dataSource: MatTableDataSource<IRole> | null;
  searchCtrl = new UntypedFormControl();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  roles: IRole[];
  userId: number;
  userRoleIds: number[];
  totalCount: number = 0;
  isListLoading = true;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _portalService: PortalService
  ) {
    this.userId = parseInt(localStorage.getItem('user_id'));
    this.userRoleIds = this.data.userRoleIds;
    this.roles = this.data.roles;
    this.subject$.next(this.roles);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IRole[]>(Boolean))
      .subscribe(data => {
        this.isListLoading = false;
        data.filter(t => this.userRoleIds.some((x: number) => x === t.id)).forEach(item => {
          item.isAdded = true;
        });
        this.totalCount = data.length;
        this.dataSource.data = data;
      });

      this.searchCtrl.valueChanges.pipe(
        untilDestroyed(this)
      ).subscribe(value => this.onFilterChange(value));

    this._portalService.userRoleIds$
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((userRoleIds: any) => {
        if (!userRoleIds) {
          return;
        }
        this.roles.filter(t => userRoleIds.some((x: number) => x === t.id)).forEach(item => {
          item.isAdded = true;
        });
        this.dataSource.data = this.roles;
      });
  }

  ngOnDestroy() {
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

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  addRole(role: IUserRole): void {
    role.isNew = true;
    role.isActive = false;
    role.statusDate = null;
    role.createdBy = this.userId;
    this._portalService.addedUserRole$.next(role);
  }
}

