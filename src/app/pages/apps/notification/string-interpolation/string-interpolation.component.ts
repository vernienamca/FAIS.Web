import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IStringInterpolation } from 'src/app/core/models/string-interpolation';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'vex-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  statusLabel = 'Active';
  pageLabel: string = 'Edit String Interpolation';
  userId: number;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  get formControls() {
    return {
      transactionCode: this.form.get('transactionCode'),
      description: this.form.get('description'),
      notificationType: this.form.get('notificationType'),
      isActive: this.form.get('isActive')
    };
  }

  private _onDestroy$ = new Subject<void>();
 
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
  ) {
    this.userId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.form = this._fb.group({
      transactionCode: ['', [Validators.required]],
      description: ['', [Validators.required]],
      notificationType: ['', [Validators.required]],
      isActive: [true, []],
    });

    if (this.userId) {
      this._portalService.getStringInterpolation(this.userId)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if (!data) {
            return;
          }
          this._initializeData(data);
        });
      return;
    }
    this.pageLabel = 'Add String Interpolation';
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
  }

  save(): void {
    const data = Object.assign({}, this.form.value);
    data.isActive = data.isActive ? 'Y' : 'N'; 

    if (this.userId) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));
      this._updateInterpolation(data);
      return;
    }

    data.createdBy = parseInt(localStorage.getItem('user_id'));
    this._createInterpolation(data);
  }

  private _createInterpolation(data: IStringInterpolation): void {
    this._portalService.createInterpolation(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('String interpolation has been successfully saved.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigate([`apps/interpolations/edit/${data.id}`]);
        });
      });
  }

  private _updateInterpolation(data: IStringInterpolation): void {
    this._portalService.updateInterpolation(this.userId, data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('String interpolation has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }

  private _initializeData(data: any): void {
    this.form.setValue({
      transactionCode: data.transactionCode,
      description: data.description || '',
      notificationType: data.notificationType,
      isActive: data.isActive === 'Y'
    });
    this.createdBy = data.createdBy;
    this.createdAt = data.createdAt;
    this.updatedBy = data.updatedBy || 'N/A';
    this.updatedAt = data.updatedAt;
  }
}
