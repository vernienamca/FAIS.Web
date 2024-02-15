import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ILibraryTypeOption } from 'src/app/core/models/library-type-option';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'vex-library-type-option',
  templateUrl: './library-type-option.component.html',
  styleUrls: ['./library-type-option.component.scss']
})
export class LibraryTypeOptionComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  statusLabel = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  get formControls() {
    return {
      type: this.form.get('type'),
      code: this.form.get('code'),
      description: this.form.get('description'),
      status: this.form.get('status'),
      remarks: this.form.get('remarks')
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
      type: ['', [Validators.required]],
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      remarks: ['']
      // ,isActive: [true, []]
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getLibraryTypeOption(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.form.setValue({
          type: data.type,
          code: data.code || '',
          description: data.description || '',
          status: data.status,
          remarks: data.remarks
          // ,isActive: data.isActive === 'Y'
        });
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedBy || 'N/A';
        this.updatedAt = data.updatedAt;

        this.form.controls['url'].disable();
      });
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
    if (!this.formControls.type.value) {
      this.formControls.type.markAsTouched();
      this.formControls.type.updateValueAndValidity();
      return;
    }
    if (!this.formControls.description.value) {
      this.formControls.description.markAsTouched();
      this.formControls.description.updateValueAndValidity();
      return;
    }
    if (!this.formControls.code.value) {
      this.formControls.code.markAsTouched();
      this.formControls.code.updateValueAndValidity();
      return;
    }
    if (!this.formControls.status.value) {
      this.formControls.status.markAsTouched();
      this.formControls.status.updateValueAndValidity();
      return;
    }
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get('id'));
    data.isActive = data.isActive ? 'Y' : 'N'; 
    data.updatedBy = parseInt(localStorage.getItem('user_id'));

  this._portalService.updateLibraryTypeOption(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Library type option has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }
}
