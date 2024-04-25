import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IStringInterpolation } from 'src/app/core/models/string-interpolation';
import { PortalService } from 'src/app/core/services/portal.service';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'vex-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  statusLabel = 'Active';
  pageLabel: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  pageMode: PageMode;
  stringInterpolations: IStringInterpolation[];
  interpolations: [];
  id: number;
  hasAccess = true;

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
    private _snackBar: MatSnackBar,
    private _securityService: SecurityService
  ) {
    const userId = parseInt(localStorage.getItem('user_id'));
    this.form = this._fb.group({
      transactionCode: ['', [Validators.required]],
      description: ['', [Validators.required]],
      notificationType: ['', [Validators.required]],
      isActive: [true, []],
    });
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;
    this.pageLabel =  this.pageMode == 1 ? 'Add String Interpolation' : 'Edit String Interpolation';

    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === 22);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if (permission.some(s => s.isUpdate) === false) {
          this.form.controls['transactionCode'].disable();
          this.form.controls['description'].disable();
          this.form.controls['notificationType'].disable();
          this.form.controls['isActive'].disable();
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });

    if (this.pageMode === 2) {
      if (this.id) {
        this._portalService.getStringInterpolation(this.id)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }
            this._initializeData(data);
          });
        return;
      }
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
    if (!this.formControls.notificationType.value) {
      this.formControls.notificationType.markAsTouched();
      this.formControls.notificationType.updateValueAndValidity();
      return;
    }

    const data = Object.assign({}, this.form.value);
    data.isActive = data.isActive ? 'Y' : 'N'; 

    if (this.pageMode === 1) {
      data.createdBy = parseInt(localStorage.getItem('user_id'));
            
      this._portalService.createInterpolation(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('String interpolation has been successfully added.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigateByUrl('apps/interpolations');
        });
      });
    }
    else if (this.pageMode === 2) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));
      data.id = this.id;
      
      this._portalService.updateInterpolation(this.id, data)
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
