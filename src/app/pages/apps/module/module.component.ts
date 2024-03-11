import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';

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
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      description: ['', []],
      url: ['', []],
      groupName: ['', [Validators.required]],
      icon: ['', []],
      isActive: [true, []],
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getModule(id)
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
