import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { CollectionViewNavigator } from '@grapecity/wijmo.input';
import { SecurityService } from 'src/app/core/services/security.service';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { PortalService } from 'src/app/core/services/portal.service';
import * as wjcCore from '@grapecity/wijmo';
import { IProjectProfile, IProjectProfileComponent } from 'src/app/core/models/project-profile';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { MatButton } from '@angular/material/button';


import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { InputDate, InputTime, ComboBox, AutoComplete, InputNumber, InputColor } from '@grapecity/wijmo.input';
import { DataMap }from '@grapecity/wijmo.grid';
// import { getData, getCountries, getProducts } from './data';

@Component({
  selector: 'vex-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})
export class ProjectProfileComponent implements OnInit, OnDestroy {
  @ViewChild('projectProfileGrid') projectProfileGrid: FlexGrid;
  @ViewChild('addbutton') addbutton: MatButton;
  @ViewChild('savebutton') savebutton: MatButton;
  yesterday = new Date();
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
  projectProfileClassification: any [] = [];
  projectProfileStage: any [] = [];
  projectProfileStageForWijmo: any [] = [];
  projectProfileTransmissionGrid: any [] = [];
  projectProfileStageMap;
  projectProfileTransmissionGridMap;
  hasAccess = false;


 data = [{}];//getData()
 countries = [{}];//getCountries()
 products = [{}];//getProducts()
 productMap = new DataMap(this.products, 'id', 'name');

  addNewRow(): void {
    const newItem = {
      costCenterType: '',
      costCenterNo: '',
      action: '',
    };
    this.projectProfileGrid.collectionView.sourceCollection.unshift(newItem);
    this.projectProfileGrid.collectionView.refresh();
  }

  onDeleteRow(item: any): void {
      const index = this.projectProfileGrid.collectionView.items.indexOf(item);
        this.projectProfileGrid.collectionView.sourceCollection.splice(index, 1);
        this.projectProfileGrid.collectionView.refresh();
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
      projStageSeq: this.form.get('projStageSeq'),
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
      statusDate: this.form.get('statusDate')
    };
  }

  private _onDestroy$ = new Subject<void>();
 
  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _securityService: SecurityService,
  ) {
    this.form = this._fb.group({
      projectName: ['', [Validators.required]],
      projClassSeq: ['', [Validators.required]],
      projStageSeq: [''],
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

    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditProjectProfile);
      if (!permission || permission.some(s => s.isRead) === false) {
        this._router.navigate([`pages/error-401`]);
      }
      if(permission.some(s => s.isUpdate) === false) {
        this.form.controls['projectName'].disable();
        this.form.controls['projClassSeq'].disable();
        this.form.controls['projStageSeq'].disable();
        this.form.controls['tpsrMonth'].disable();
        this.form.controls['noOfComponentsCompleted'].disable();
        this.form.controls['noOfComponentsUnderConstruction'].disable();
        this.form.controls['latestInspectionDate'].disable();
        this.form.controls['totalAMRCost'].disable();
        this.form.controls['recordedAMR'].disable();
        this.form.controls['unrecordedAMR'].disable();
        this.form.controls['remarks'].disable();
        this.form.controls['udf1'].disable();
        this.form.controls['udf2'].disable();
        this.form.controls['udf3'].disable();
        this.form.controls['isActive'].disable();
        this.form.controls['statusDate'].disable();
        //this.form.controls['addbutton'].disable();
        this.addbutton.disabled = true;
        this.savebutton.disabled = true;
        this.projectProfileGrid.isDisabled = true;
      }
      this.hasAccess = permission.some(s => s.isUpdate);
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
        this.projectProfileComponentData = new wjcCore.CollectionView(data.projectProfileComponents, { pageSize: 5 });
        this.form.patchValue({
          projectName: data.projectName || '',
          projClassSeq: data.projClassSeq || '',
          projStageSeq: data.projStageSeq || '',
          tpsrMonth: data.tpsrMonth || new Date(),
          noOfComponentsCompleted: data.noOfComponentsCompleted || '',
          noOfComponentsUnderConstruction: data.noOfComponentsUnderConstruction || '',
          latestInspectionDate: data.latestInspectionDate || '',
          totalAMRCost: data.totalAMRCost || '',
          recordedAMR: data.recordedAMR || '',
          unrecordedAMR: data.unrecordedAMR || '',
          udf1: data.udF1 || '',
          udf2: data.udF2 || '',
          udf3: data.udF3 || '',
          remarks: data.remarks || '',
          isActive: data.isActive || 'Y',
          status: data.status || '',
          statusDate: data.statusDate = new Date()
        });
        this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
        this.createdBy = data.createdBy.toString();
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedBy.toString() || 'N/A';
        this.updatedAt = data.updatedAt;

      });
    }
  }

  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));

    if(!isNaN(this.id))
    this.projectProfileComponentData = this.getProjectProfileComponentData(this.id);

    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.projectProfileClassification = data.filter(type => type.code =='PC');
      this.projectProfileStage = data.filter(type => type.code === 'PS');
      this.projectProfileTransmissionGrid = data.filter(type => type.code === 'PTG');
      this.projectProfileStageMap = new DataMap(this.projectProfileStage, 'id', 'name');
      this.projectProfileTransmissionGridMap = new DataMap(this.projectProfileTransmissionGrid, 'id', 'name');
    })


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

      const collectionView = this.projectProfileGrid.collectionView;
      const allItems = collectionView.sourceCollection as any[];
      const projectProfileComponentDTOArray: IProjectProfileComponent[] = allItems.map((item: any) => {
        return {
          id: item.id || 0,
          pjcId: this.id || 0,
          projectComponent: item.projectComponent,
          details: item.details,
          projectStageSeq: item.projectStage,
          transmissionGridSeq: item.transmissionGrid,
          startDate: item.startDate,
          targetDate: item.targetDate,
          completionDate: item.completionDate,
          dateRemoved: null,
          createdBy: parseInt(localStorage.getItem('user_id')),
          createdAt: this.createdAt = new Date(),
          updatedBy: parseInt(localStorage.getItem('user_id')),
          updatedAt: null,
          projectProfileId: this.id || 0
        };
      });
    
      const projectProfileDTO: IProjectProfile = {
        id: this.id || 0,
        projectName: this.formControls.projectName.value,
        projClassSeq: this.formControls.projClassSeq.value,
        projStageSeq: this.formControls.projStageSeq.value,
        tpsrMonth: this.formControls.tpsrMonth.value,
        noOfComponentsCompleted: this.formControls.noOfComponentsCompleted.value,
        noOfComponentsUnderConstruction: this.formControls.noOfComponentsUnderConstruction.value,
        latestInspectionDate: this.formControls.latestInspectionDate.value,
        totalAMRCost: this.formControls.totalAMRCost.value,
        recordedAMR: this.formControls.recordedAMR.value,
        unrecordedAMR: this.formControls.unrecordedAMR.value,
        remarks: this.formControls.remarks.value,
        udF1: this.formControls.udf1.value,
        udF2: this.formControls.udf2.value,
        udF3: this.formControls.udf3.value,
        isActive: this.formControls.isActive.value ? 'Y' : 'N',
        statusDate: this.formControls.statusDate.value,
        createdBy: (localStorage.getItem('user_id')),
        createdAt: this.createdAt = new Date(),
        updatedBy: (localStorage.getItem('user_id')),
        updatedAt: this.updatedAt,
        projectProfileComponentsDTO: projectProfileComponentDTOArray,
        status: '',
        createdByName: '',
        updatedByName: '',
        projectProfileComponentModel: [],
        projectProfileComponents: []
      };


    const data = Object.assign({}, this.form.value);
    projectProfileDTO.id = parseInt(this._route.snapshot.paramMap.get('id'));
    projectProfileDTO.isActive = data.isActive ? 'Y' : 'N'; 
    projectProfileDTO.statusDate = new Date();

    if (this.pageMode === 1) {
      projectProfileDTO.id = 0;
      projectProfileDTO.createdBy = localStorage.getItem('user_id');
      projectProfileDTO.projectProfileComponentsDTO = projectProfileComponentDTOArray;

      this._portalService.createProjectProfile(projectProfileDTO)
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

      projectProfileDTO.updatedBy = localStorage.getItem('user_id');

      this._portalService.updateProjectProfile(projectProfileDTO)
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
