import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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
  createdByDisplay: string;
  createdBy: number;
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
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      transactionCode: ['', [Validators.required]],
      description: ['', []],
      notificationType: ['', [Validators.required]],
      isActive: [true, []],
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    if(id != null && id != 0)
    {
      this._portalService.getStringInterpolation(id)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if (!data) {
            return;
          }
          console.log(data);
          this.form.setValue({
            transactionCode: data.transactionCode,
            description: data.description || '',
            notificationType: data.notificationType,
            isActive: data.isActive === 'Y'
          });
          this.createdByDisplay = data.createdByDisplay;
          this.createdBy = data.createdBy;
          this.createdAt = data.createdAt;
          this.updatedBy = data.updatedBy || 'N/A';
          this.updatedAt = data.updatedAt;

          this.form.controls['url'].disable();
        });
    }
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
    if (!this.formControls.transactionCode.value) {
      this.formControls.transactionCode.markAsTouched();
      this.formControls.transactionCode.updateValueAndValidity();
      return;
    }
    if (!this.formControls.description.value) {
      this.formControls.description.markAsTouched();
      this.formControls.description.updateValueAndValidity();
      return;
    }
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get('id'));
    data.isActive = data.isActive ? 'Y' : 'N'; 
    //ASK V: when to change status date / logic behind status date field
    data.createdAt = this.createdAt;
    data.createdBy = this.createdBy;
    data.updatedBy = parseInt(localStorage.getItem('user_id'));

  this._portalService.updateStringInterpolation(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('String Interpolation has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
   }
}
