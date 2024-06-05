import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { PortalService } from 'src/app/core/services/portal.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-library-types',
  templateUrl: './library-types.component.html',
  styleUrls: ['./library-types.component.scss']
})
export class LibraryTypesComponent implements OnInit, OnDestroy{
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  pageLabel: string;
  layoutCtrl = new UntypedFormControl('fullwidth');
  form: FormGroup;
  pageMode: PageMode;
  statusLabel: string = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  types: ILibraryTypes[];
  libraryTypes = [];
  
  private _onDestroy$ = new Subject<void>();

  get formControls() {
    return {
      name: this.form.get('name'),
      code: this.form.get('code'),
      description: this.form.get('description'),
      status: this.form.get('isActive')
    };
  }

  constructor(
    private _ngZone: NgZone,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: [true]
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;

    this.pageLabel =  this.pageMode == 1 ? 'Add Library Type' : 'Edit Library Type';

    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(libraryTypes => {
      if (!libraryTypes) {
        return;
      }
      this.types = libraryTypes;
      this.libraryTypes = libraryTypes.map(function(a) {return [a.id, a.name];}).filter((value, index, self) => self.indexOf(value) === index);
    });

    if (this.pageMode === 2) {
      this._portalService.getLibraryType(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {        
        if (!data) {
          return;
        }
        this.form.patchValue({
          code: data.code || '',
          description: data.description || '',
          isActive: data.isActive === 'Y',
        });
        this.form.get('name').setValue(data.name, data.name)
        this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedBy || 'N/A';
        this.updatedAt = data.updatedAt;
      });
    }
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  triggerResize(): void {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? 'Inactive' : 'Active';
  }

  save(): void {
    if (!this.formControls.name.value) {
      this.formControls.name.markAsTouched();
      this.formControls.name.updateValueAndValidity();
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
    
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get('id'));
    data.isActive = data.isActive ? 'Y' : 'N'; 

    if (this.pageMode === 1) {
      data.createdBy = parseInt(localStorage.getItem('user_id'));
            
      this._portalService.createLibraryType(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Library type has been successfully added.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigateByUrl('apps/library-types');
        });
      });
    }
    else if (this.pageMode === 2) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));
      
      this._portalService.updateLibraryType(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Library type has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
    }
  }

  onFilterUser(event: any): void {        
    if (!event.value) {
      return;
    }
    this.types = this.types.filter(t => t.name === event.value);
  }
}
