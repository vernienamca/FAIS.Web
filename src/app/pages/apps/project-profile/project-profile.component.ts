import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil,Observable ,tap} from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { SecurityService } from 'src/app/core/services/security.service';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { PortalService } from 'src/app/core/services/portal.service';
import * as wjcCore from '@grapecity/wijmo';
import { IProjectProfile, IProjectProfileComponent } from 'src/app/core/models/project-profile';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { MatButton } from '@angular/material/button';
import {IRole} from 'src/app/core/models/role'
import { LibraryTypeCodes } from 'src/app/core/enums/library-types.enum';
import { DataMap }from '@grapecity/wijmo.grid';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
  statusDate: Date | null = null;
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
  userId: number;
  roles: IRole[] = [];
  roleIds: number[] = [];
  isAdmin: boolean = false;
  isSaving: boolean;

 data = [{}];

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

  // noOfComponentsCompleted(): string {    
  //   if(this.projectProfileGrid == undefined) {
  //       return "0";
  //   }
  //   const collectionView = this.projectProfileGrid.collectionView;
  //   const allItems = collectionView.sourceCollection as any[];
  //   return allItems.filter(function(component){
  //     return component.completionDate != '' && component.completionDate != undefined;
  //   }).length.toString();
  // }
  // noOfComponentsUnderConstruction(): string {
    
  //   if(this.projectProfileGrid == undefined) {
  //       return "0";
  //   }
  //   const collectionView = this.projectProfileGrid.collectionView;
  //   const allItems = collectionView.sourceCollection as any[];
  //   return allItems.filter(function(component){
  //     return component.completionDate == '' || component.completionDate == undefined;
  //   }).length.toString();
  // }

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
    private _dialog: MatDialog
  ) {
    this.form = this._fb.group({
      projectName: ['', [Validators.required]],
      projClassSeq: ['', [Validators.required]],
      projStageSeq: ['', [Validators.required]],
      tpsrMonth: ['', [Validators.required]],
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

    this._getPermissions();

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;

    if (this.pageMode === 2) {
      this._portalService.getProjectProfile(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }

        console.log(data);
        
        this.projectProfileComponentData = new wjcCore.CollectionView(data.projectProfileComponents, { pageSize: 5 });
       
        this._patchValues(data);
        this.statusDate = data.statusDate
        this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
        this.createdBy = data.createdByName.toString();
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedByName.toString() || 'N/A';
        this.updatedAt = data.updatedAt;

      });
    }
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('user_id'));
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));

    if(!isNaN(this.id))
    this.projectProfileComponentData = this.getProjectProfileComponentData(this.id);

    this._portalService.getUserRoles(this.userId)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      const roleAuthorized = this._getRoleAuthorization(data)

      if (roleAuthorized.name === 'ARMD Librarian') {
        const armdLibrarianRole = data.find(role => role.name === 'ARMD Librarian');
        if (armdLibrarianRole) {
          this.roleIds.push(armdLibrarianRole.id); 
          //this._disableFormFields(roleAuthorized);
        }
      }
      else if (roleAuthorized.name === 'PAD Librarian') {
        const padLibrarianRole = data.find(role => role.name === 'PAD Librarian');
        if (padLibrarianRole) {
          this.roleIds.push(padLibrarianRole.id);
          //this._disableFormFields(roleAuthorized);
        }
      }

      else if (roleAuthorized.name === 'Administrator') {
       this.isAdmin = true;
       const administratorRole = data.find(role => role.name === 'Administrator');
       this.roleIds.push(administratorRole.id)
      }
      else {
        //this._disableFormFields(roleAuthorized);
      }
    });
    this._getLookUps();
    
  }

  getProjectProfileComponentDataCount(): number {
    if(!this.projectProfileGrid) {
      return 0;
    }
    const collectionView = this.projectProfileGrid.collectionView;
    const allItems = collectionView.sourceCollection as any[];
    return allItems.length;
  }

  private _getRoleAuthorization(roles: any[]): any {
    const relevantRoles = roles.filter(role => roles.some(r => r.name === role.name && role.isActive === true));
    if (relevantRoles.length > 0) {
      const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.userRoleId < currentRole.userRoleId ? minRole : currentRole);
      return firstRole;
    }
    else { 
      this._router.navigate(['/pages/error-401']); 
    }
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
  }

  save(): void {
    this.isSaving = true;
    const collectionView = this.projectProfileGrid.collectionView;
    const allItems = collectionView.sourceCollection as any[];
    const projectProfileComponentDTOArray: IProjectProfileComponent[] = allItems.map((item: any) => {
      return {
        id: item.id || 0,
        pjcId: this.id || 0,
        projectComponent: item.projectComponent,
        details: item.details,
        projectStageSeq: item.projectStageSeq,
        transmissionGridSeq: item.transmissionGridSeq,
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

      const dialogRef = this._dialog.open(DialogComponent, {
        data: {
          cancelButtonLabel: "Cancel",
          confirmButtonLabel: "Confrim",
          dialogHeader: "Confirmation",
          dialogContent: "Save Project Profile?",
          moduleName: 'Project Profile',
          callbackMethod: function() { }
        },
        width: '450px'
      });
      dialogRef.afterClosed().subscribe(result => {
        if(!result) { return; }
        this._createProjectProfile(projectProfileDTO);
      });

    }
    else if (this.pageMode === 2) {

      projectProfileDTO.updatedBy = localStorage.getItem('user_id');
      this._updateProjectProfile(projectProfileDTO);
    }
  }

  onFilterUser(event: any): void {        
    if (!event.value) {
      return;
    }
    this.types = this.types.filter(t => t.name === event.value);
  }

  private _createProjectProfile(projectProfileDTO: IProjectProfile): void {
    projectProfileDTO.statusDate = new Date();
    this._portalService.createProjectProfile(projectProfileDTO)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }

      this.id = data.id;
      const notifData = {
      roleIds: this.roleIds, 
      id: this.id,
      assetName: data.projectName,
      editMode: false,
      ModuleId: ModuleEnum.ProjectProfile
    };
    this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })

      let snackBarRef = this._snackBar.open('Project profile has been successfully added.', 'Close');
      this.isSaving = false;
      snackBarRef.afterDismissed().subscribe(() => {
        this._router.navigateByUrl('apps/project-profile');
      });
    });
  }

  private _updateProjectProfile(projectProfileDTO: IProjectProfile): void {
    this._portalService.updateProjectProfile(projectProfileDTO)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.id = data.id;
      const notifData = {
      roleIds: this.roleIds, 
      id: this.id,
      assetName: data.projectName,
      editMode: true,
      ModuleId: ModuleEnum.ProjectProfile
    };
    this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })

      let snackBarRef = this._snackBar.open('Project profile has been successfully updated.', 'Close');
      snackBarRef.afterDismissed().subscribe(() => {
        window.location.reload();
      });
    });
  }
  
  private _getLookUps(): void {
    const codes = 
      [ LibraryTypeCodes.ProjectProfileClassification
      , LibraryTypeCodes.ProjectProfileStage
      , LibraryTypeCodes.ProjectProfileTransmissionGrid];

    this._portalService.getDropdownValues(codes)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.projectProfileClassification = data.filter(type => type.dropdownCode == LibraryTypeCodes.ProjectProfileClassification);
      this.projectProfileStage = data.filter(type => type.dropdownCode === LibraryTypeCodes.ProjectProfileStage);
      this.projectProfileTransmissionGrid = data.filter(type => type.dropdownCode === LibraryTypeCodes.ProjectProfileTransmissionGrid);
      this.projectProfileStageMap = new DataMap(this.projectProfileStage, 'parentIt', 'parentValue');
      this.projectProfileTransmissionGridMap = new DataMap(this.projectProfileTransmissionGrid, 'parentIt', 'parentValue');
    })
  }

  private _patchValues(data): void {
    console.log('patch: ', data);
    this.form.patchValue({
      projectName: data.projectName || '',
      projClassSeq: data.projClassSeq || '',
      projStageSeq: data.projStageSeq || '',
      tpsrMonth: data.tpsrMonth || new Date(),
      noOfComponentsCompleted: data.noOfComponentsCompleted || '',
      noOfComponentsUnderConstruction: data.noOfComponentsUnderConstruction || '',
      latestInspectionDate: data.latestInspectionDate || '',
      totalAMRCost: data.totalAmrCost,
      recordedAMR: data.recordedAMR || '',
      unrecordedAMR: data.unrecordedAMR || '',
      udf1: data.udF1 || '',
      udf2: data.udF2 || '',
      udf3: data.udF3 || '',
      remarks: data.remarks || '',
      isActive: data.isActive === 'Y' ? true : false,
      status: data.status || '',
    });
  }

  private _getPermissions(): void {
    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditProjectProfile);
      this.hasAccess = permission.some(s => s.isUpdate);
    });
  }
}
