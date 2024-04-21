import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'vex-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  statusLabel = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  hasAccess = false;

  get formControls() {
    return {
      name: this.form.get('name'),
      description: this.form.get('description'),
      url: this.form.get('url'),
      groupName: this.form.get('groupName'),
      icon: this.form.get('icon'),
      isActive: this.form.get('isActive')
    };
  }

  private _onDestroy$ = new Subject<void>();
 
  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar
  ) {
    const userId = parseInt(localStorage.getItem('user_id'));
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', []],
      url: ['', []],
      groupName: ['', [Validators.required]],
      icon: ['', []],
      isActive: [true, []],
    });

    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === 19);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if (permission.some(s => s.isUpdate) === false) {
          this.form.controls['name'].disable();
          this.form.controls['description'].disable();
          this.form.controls['groupName'].disable();
          this.form.controls['icon'].disable();
          this.form.controls['isActive'].disable();
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });
  }

  ngOnInit(): void {
    const moduleId = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getModule(moduleId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.form.setValue({
          name: data.name,
          description: data.description || '',
          url: data.url || '',
          groupName: data.groupName,
          icon: data.icon || '',
          isActive: data.isActive === 'Y'
        });
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedBy || 'N/A';
        this.updatedAt = data.updatedAt;

        this.form.controls['url'].disable();
      });
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
    data.id = parseInt(this._route.snapshot.paramMap.get('id'));
    data.isActive = data.isActive ? 'Y' : 'N'; 
    data.updatedBy = parseInt(localStorage.getItem('user_id'));

    this._portalService.updateModule(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Module has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }
}
