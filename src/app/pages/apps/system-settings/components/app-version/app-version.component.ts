import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject, Subject, filter, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'vex-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  userId: number;
  displayedColumns: string[] = ['version', 'date', 'amendment'];
  subject$: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  dataSource: MatTableDataSource<any[]> | null;
  data$: Observable<any[]> = this.subject$.asObservable();
  versionForm: FormGroup;
  currentDate: Date = new Date();
  versionDate: string;

  get formControls() {
    return {
      versionNo: this.versionForm.get('versionNo'),
      versionDate: this.versionForm.get('versionDate'),
      amendment: this.versionForm.get('amendment')
    }
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _portalService: PortalService,
    private _datePipe: DatePipe,
    private _snackbar: MatSnackBar,
  ) {
    this.versionDate = this._datePipe.transform(this.currentDate, 'MM/dd/yyyy h:mm a');
    this.versionForm = this._fb.group({
      versionNo: ['', Validators.required],
      versionDate: ['', Validators.required],
      amendment: ['', Validators.required],
      createdBy: [1]
    });
  }

  ngOnInit(): void {
    this._portalService.getAppVersions()
      .pipe(
        takeUntil(this._onDestroy$)
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
      .subscribe(vers => {
        this.dataSource.data = vers['result'];        
      });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  save() {
    this.versionForm.patchValue({ versionDate: this.currentDate});
    this._portalService.addVersion(this.versionForm.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe({
        next: (data) => {
          const newData = data['result'];
          this.dataSource.data = newData;

          this.versionForm.reset();
          this.versionDate = this._datePipe.transform(this.currentDate, 'MM/dd/yyyy h:mm a');

          this._snackbar.open('App version added successfully .', 'Close', {
            duration: 5000,
          });
        },
        error: (error) => {
          this._snackbar.open('Error adding App Version.', 'Close', {
            duration: 5000,
          });
        }
      }
      );

  }

}
