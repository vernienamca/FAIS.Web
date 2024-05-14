import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { CollectionViewNavigator } from '@grapecity/wijmo.input';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { PortalService } from 'src/app/core/services/portal.service';
import * as wjcCore from '@grapecity/wijmo';
import { IProjectProfileComponent } from 'src/app/core/models/project-profile';

@Component({
  selector: 'vex-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})
export class ProjectProfileComponent implements OnInit, OnDestroy {
  @ViewChild('costCenterGrid') costCenterGrid: FlexGrid;
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
  id: number;
  projectProfileComponentData = this.getProjectProfileComponentData(0);

  addNewRow(): void {
    const newItem = {
      costCenterType: '',
      costCenterNo: '',
      action: '',
    };
    this.costCenterGrid.collectionView.sourceCollection.unshift(newItem);
    this.costCenterGrid.collectionView.refresh();
  }

  onDeleteRow(item: any): void {
      const index = this.costCenterGrid.collectionView.items.indexOf(item);
        this.costCenterGrid.collectionView.sourceCollection.splice(index, 1);
        this.costCenterGrid.collectionView.refresh();
  }  
  
  
  getProjectProfileComponentData(count: number) {
    const maxRowsToShow = 5;
    const pageSize = Math.min(count, maxRowsToShow);

    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        id: '',
        pjcId: '',
        projectComponent: '',
        details: '',
        projectStage: '',
        transmissionGrid: '',
        startDate: '',
        targetDate: '',
        completionDate: '',
        action: ''
      });
    }

    const collectionView = new wjcCore.CollectionView(data, { pageSize });
    return collectionView;
  }


  get formControls() {
    return {
      projectName: this.form.get('projectName'),
      projClassSeq: this.form.get('projClassSeq'),
      projectStageSeq: this.form.get('projectStageSeq'),
      tpsrMonth: this.form.get('tpsrMonth'),
      noOfComponentsCompleted: this.form.get('noOfComponentsCompleted'),
      noOfComponentsUnderConstruction: this.form.get('noOfComponentsUnderConstruction'),
      latestInspectionDate: this.form.get('latestInspectionDate'),
      totalAMRCost: this.form.get('totalAMRCost'),
      recordedAMR: this.form.get('recordedAMR'),
      unrecordedAMR: this.form.get('unrecordedAMR'),
      remarks: this.form.get('remarks'),
      udf1: this.form.get('udf1'),
      udf2: this.form.get('udf2'),
      udf3: this.form.get('udf3'),
      isActive: this.form.get('isActive'),
      statusDate: this.form.get('statusDate'),
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
      projectName: ['', [Validators.required]],
      projClassSeq: ['', [Validators.required]],
      projectStageSeq: [''],
      tpsrMonth: [''],
      noOfComponentsCompleted: [''],
      noOfComponentsUnderConstruction: [''],
      latestInspectionDate: [''],
      totalAMRCost: [''],
      recordedAMR: [''],
      unrecordedAMR: [''],
      remarks: [''],
      udf1: [''],
      udf2: [''],
      udf3: [''],
      isActive: [true],
      status: [''],
      statusDate: ['']
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;

    if (this.pageMode === 2) {
      this._portalService.getProjectProfile(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }

        this.form.patchValue({
          projectName: data.projectName || '',
          projClassSeq: data.projClassSeq || '',
          projectStageSeq: data.projectStageSeq || '',
          tpsrMonth: data.tpsrMonth || '',
          noOfComponentsCompleted: data.noOfComponentsCompleted || '',
          noOfComponentsUnderConstruction: data.noOfComponentsUnderConstruction || '',
          latestInspectionDate: data.latestInspectionDate || '',
          totalAMRCost: data.totalAMRCost || '',
          recordedAMR: data.recordedAMR || '',
          unrecordedAMR: data.unrecordedAMR || '',
          udf1: data.udf1 || '',
          udf2: data.udf2 || '',
          udf3: data.udf3 || '',
          remarks: data.remarks || '',
          isActive: data.isActive || 'Y',
          status: data.status || '',
          statusDate: data.statusDate || ''
        });
        this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
        this.createdBy = data.createdByName;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedByName || 'N/A';
        this.updatedAt = data.updatedAt;

      });
    }
  }

  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.projectProfileComponentData = this.getProjectProfileComponentData(this.id);
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
  }

  save(): void {
    if (!this.formControls.projectName.value) {
      this.formControls.projectName.markAsTouched();
      this.formControls.projectName.updateValueAndValidity();
      return;
    }
    if (!this.formControls.projClassSeq.value) {
      this.formControls.projClassSeq.markAsTouched();
      this.formControls.projClassSeq.updateValueAndValidity();
      return;
    }

    const wijmoInvalid = this.projectProfileComponentData.sourceCollection.some((item: any) => {
      return item.gl === '' || /^[a-zA-Z]+$/.test(item.glNo) || item.sl === '' || /^[a-zA-Z]+$/.test(item.sl) || item.faisRefNo === '';
    });
      if (wijmoInvalid) {
        this._snackBar.open('Please fill in or delete the rows in the table.', 'Close', {
          duration: 5000,
        });
        return;
      }

      const collectionView = this.costCenterGrid.collectionView;
      const allItems = collectionView.sourceCollection as any[];
      const projectProfileComponentDTOArray: IProjectProfileComponent[] = allItems.map((item: any) => {
        return {
          id: item.id || 0,
          pjcId: this.id || 0,
          projectComponent: item.projectComponent,
          details: item.details,
          projectStage: item.projectStage,
          transmissionGrid: item.transmissionGrid,
          startDate: item.startDate,
          targetDate: item.targetDate,
          completionDate: item.completionDate,
          dateRemoved: null,
          createdBy: parseInt(localStorage.getItem('user_id')),
          createdAt: this.createdAt = new Date(),
          updatedBy: parseInt(localStorage.getItem('user_id')),
          updatedAt: null
        };
      });
    
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get('id'));
    data.isActive = data.isActive ? 'Y' : 'N'; 

    if (this.pageMode === 1) {
      data.createdBy = parseInt(localStorage.getItem('user_id'));
      data.projectProfileComponentDTO = projectProfileComponentDTOArray;

      this._portalService.createProjectProfile(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Project profile has been successfully added.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigateByUrl('apps/project-profile');
        });
      });
    }
    else if (this.pageMode === 2) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));

      this._portalService.updateProjectProfile(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Project profile has been successfully updated.', 'Close');
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
