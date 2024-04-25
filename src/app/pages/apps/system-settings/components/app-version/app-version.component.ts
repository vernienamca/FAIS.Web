import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IPVersion } from 'net';
import { Observable, ReplaySubject, Subject, filter, finalize, takeUntil } from 'rxjs';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { PortalService } from 'src/app/core/services/portal.service';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'vex-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss'],
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
export class AppVersionComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  userId: number;
  columns: TableColumn<any>[] = [
    { label: 'Version Number', property: 'versionNo', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Version Date', property: 'versionDate', type: 'text', visible: true },
    { label: 'Amendment', property: 'amendment', type: 'text', visible: true },
  ];
  subject$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  dataSource: MatTableDataSource<any[]> | null;
  data$: Observable<any[]> = this.subject$.asObservable();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  currentDate: Date = new Date();
  versionDate: string;
  totalCount: number = 0;
  isListLoading = true;
  hasUpdateAccess = false;

  get formControls() {
    return {
      versionNo: this.form.get('versionNo'),
      versionDate: this.form.get('versionDate'),
      amendment: this.form.get('amendment')
    }
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _portalService: PortalService,
    private _datePipe: DatePipe,
    private _snackBar: MatSnackBar,
    private _securityService: SecurityService
  ) {
    this.versionDate = this._datePipe.transform(this.currentDate, 'MM/dd/yyyy h:mm a');
    this.form = this._fb.group({
      versionNo: ['', Validators.required],
      versionDate: ['', Validators.required],
      amendment: ['', Validators.required],
      createdBy: [localStorage.getItem("user_id"), []]
    });
    
    const userId = parseFloat(localStorage.getItem('user_id'));
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === 5);
        if (permission.some(s => s.isUpdate) === false) {
          this.form.controls['versionNo'].disable();
          this.form.controls['versionDate'].disable();
          this.form.controls['amendment'].disable();
        }
        this.hasUpdateAccess = permission.some(s => s.isUpdate);
      });
  }

  ngOnInit(): void {
    this._portalService.getAppVersions()
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
      .pipe(filter<any[]>(Boolean))
      .subscribe(data => {
        this.totalCount = data.length;
        this.dataSource.data = data;        
      });
    
    this.formControls.versionDate.setValue(this._datePipe.transform(new Date(), 'longDate'))
    this.form.controls['versionDate'].disable();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  save(): void {
    if (!this.formControls.versionNo.value) {
      this.formControls.versionNo.markAsTouched();
      this.formControls.versionNo.updateValueAndValidity();
      return;
    }
    if (!this.formControls.amendment.value) {
      this.formControls.amendment.markAsTouched();
      this.formControls.amendment.updateValueAndValidity();
      return;
    }
    const data = Object.assign({}, this.form.value);
    data.createdBy = parseInt(localStorage.getItem('user_id'));

    this._portalService.createVersion(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Application version has been successfully saved.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }
}
