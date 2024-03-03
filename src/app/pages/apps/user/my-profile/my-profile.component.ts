import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, ReplaySubject, Subject, filter, finalize, takeUntil } from 'rxjs';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { IUserRole } from 'src/app/core/models/user';
import { PortalService } from 'src/app/core/services/portal.service';
import { SecurityService } from 'src/app/core/services/security.service';

@UntilDestroy()
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

export class MyProfileComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IUserRole>[] = [
    { label: 'Role Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Date Added', property: 'createdAt', type: 'text', visible: true }
  ];
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IUserRole[]> = new ReplaySubject<IUserRole[]>(1);
  data$: Observable<IUserRole[]> = this.subject$.asObservable();
  dataSource: MatTableDataSource<IUserRole> | null;
  searchCtrl = new UntypedFormControl();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  userRoleTabLabel: string = 'User Roles (0)';
  userRoles: IUserRole[] = [];
  userId: number;
  photo: string;
  totalCount: number = 0;
  isListLoading = true;

  get formControls() {
    return {
      employeeNumber: this.form.get('employeeNumber'),
      username: this.form.get('username'),
      position: this.form.get('position'),
      firstName: this.form.get('firstName'),
      lastName: this.form.get('lastName'),
      emailAddress: this.form.get('emailAddress'),
      mobileNumber: this.form.get('mobileNumber'),
      taFG: this.form.get('taFG'),
      oupFG: this.form.get('oupFG'),
      division: this.form.get('division'),
      accountStatus: this.form.get('accountStatus'),
      statusDate: this.form.get('statusDate'),
      accountExpiration: this.form.get('accountExpiration')
    };
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _portalService: PortalService,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar,
    private _datePipe: DatePipe
  ) {
    this.userId = parseInt(localStorage.getItem('user_id'));
    this.form = this._fb.group({
      employeeNumber: ['', []],
      username: ['', [Validators.required]],
      position: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      taFG: ['', []],
      oupFG: ['', []],
      division: ['', []],
      accountStatus: ['1', [Validators.required]],
      statusDate: ['', []],
      dateExpired: ['', []]
    });
    this._portalService.getUser(this.userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this._initializeData(data);
        this._disableFormControls();
      });
  }

  ngOnInit(): void {
    this._getUserRoles(this.userId);
    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IUserRole[]>(Boolean))
      .subscribe(data => {
        this.userRoleTabLabel = `User Roles (${data?.length})`;
        this.totalCount = data.length;
        this.dataSource.data = data;
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

  save(): void {
    const data = Object.assign({}, this.form.value);
    data.updatedBy = this.userId;

    this._securityService.updateUser(this.userId, true, data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Your profile has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
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

  private _initializeData(data: any): void {
    this.form.setValue({
      employeeNumber: data.employeeNumber,
      username: data.userName,
      position: data.position,
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      mobileNumber: data.mobileNumber,
      taFG: data.tafGs || [],
      oupFG: data.oufg || '',
      division: data.division || '',
      accountStatus: data.status.toString(),
      statusDate: `${this._datePipe.transform(data.statusDate, 'longDate')}` || '',
      dateExpired: data.dateExpired
    });
    this.photo = data.photo ? `assets/img/avatars/${data.photo}` : '';
  }

  private _disableFormControls(): void {
    this.form.controls['employeeNumber'].disable();
    this.form.controls['username'].disable();
    this.form.controls['position'].disable();
    this.form.controls['firstName'].disable();
    this.form.controls['emailAddress'].disable();
    this.form.controls['taFG'].disable();
    this.form.controls['oupFG'].disable();
    this.form.controls['division'].disable();
    this.form.controls['accountStatus'].disable();
    this.form.controls['statusDate'].disable();
    this.form.controls['dateExpired'].disable();
  }

  private _getUserRoles(userId: number): void {
    this._portalService.getUserRoles(userId)
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
  }
}
