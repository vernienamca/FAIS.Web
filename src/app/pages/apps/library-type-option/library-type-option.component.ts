import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'vex-library-type-option',
  templateUrl: './library-type-option.component.html',
  styleUrls: ['./library-type-option.component.scss']
})
export class LibraryTypeOptionComponent implements OnInit, OnDestroy {
  pageMode: PageMode;
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  statusLabel: string = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  types: ILibraryTypes[];
  libraryTypes = [];

  get formControls() {
    return {
      libraryTypeId: this.form.get('libraryTypeId'),
      code: this.form.get('code'),
      description: this.form.get('description'),
      status: this.form.get('isActive'),
      remark: this.form.get('remark')
    };
  }

  private _onDestroy$ = new Subject<void>();
 
  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {
    this.form = this._fb.group({
      libraryTypeId: ['', [Validators.required]],
      code: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: [true],
      remark: ['']
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;
    
    this._portalService.getLibraryType()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(libraryTypes => {
      if (!libraryTypes) {
        return;
      }
      this.types = libraryTypes;
      this.libraryTypes = libraryTypes.map(function(a) {return [a.id, a.name];}).filter((value, index, self) => self.indexOf(value) === index);
    });

    if (this.pageMode === 2) {
      this._portalService.getLibraryTypeOption(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }

        this.form.patchValue({
          code: data.code || '',
          description: data.description || '',
          isActive: data.isActive === 'Y',
          remark: data.remark
        });
        this.form.get('libraryTypeId').setValue(data.libraryTypeId, data.libraryTypeName)
        this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
        this.createdBy = data.createdByName;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedByName || 'N/A';
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

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
  }

  save(): void {
    if (!this.formControls.libraryTypeId.value) {
      this.formControls.libraryTypeId.markAsTouched();
      this.formControls.libraryTypeId.updateValueAndValidity();
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

      this._portalService.createLibraryTypeOption(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Library type option has been successfully added.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigateByUrl('apps/library-options');
        });
      });
    }
    else if (this.pageMode === 2) {
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

  onFilterUser(event: any): void {        
    if (!event.value) {
      return;
    }
    this.types = this.types.filter(t => t.name === event.value);
  }
}
