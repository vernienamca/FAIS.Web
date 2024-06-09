import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl, FormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, startWith, takeUntil } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { PortalService } from 'src/app/core/services/portal.service';
import { CommonFunctions } from 'src/app/shared/functions/common-functions';

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
  typesFilterCtrl: FormControl = new FormControl();
  typesFilter$: Observable<string> = new Observable<string>();
  filteredtypes$: Observable<ILibraryTypes[]> = new Observable<ILibraryTypes[]>();
  types$ = new BehaviorSubject<ILibraryTypes[]>([]);
  libraryTypes = [];

  get formControls() {
    return {
      libraryTypeId: this.form.get('libraryTypeId'),
      code: this.form.get('code'),
      description: this.form.get('description'),
      status: this.form.get('isActive'),
      remarks: this.form.get('remarks'),
      ranking: this.form.get('ranking'),
      udf1: this.form.get('udf1'),
      udf2: this.form.get('udf2'),
      udf3: this.form.get('udf3')
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
      code: [''],
      description: ['', [Validators.required]],
      isActive: [true],
      remarks: [''],
      ranking: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      udf1: [''],
      udf2: [''],
      udf3: [''],
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;
    
    this._portalService.getLibraryTypes()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(libraryTypes => {
        if (!libraryTypes) {
          return;
        }
        this.types$.next(libraryTypes);
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
            remarks: data.remarks,
            ranking : data.ranking,
            udf1 : data.udF1,
            udf2 : data.udF2,
            udf3 : data.udF3
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
    this.typesFilter$ = this.typesFilterCtrl.valueChanges.pipe(
      startWith(''),
      takeUntil(this._onDestroy$)
    );
    this.filteredtypes$ = CommonFunctions.applyDataFiltering(
      this.types$,
      this.typesFilter$,
      (searchString) => (libraryType) =>
        libraryType.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1
    );
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
}
