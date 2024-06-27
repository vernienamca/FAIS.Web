import { Component, OnDestroy, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, of, switchMap, takeUntil, tap } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { SecurityService } from 'src/app/core/services/security.service';
import { PortalService } from 'src/app/core/services/portal.service';
import * as wjcCore from '@grapecity/wijmo';
import { IProjectProfile, IProjectProfileComponents } from 'src/app/core/models/project-profile';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { MatButton } from '@angular/material/button';
import {IRole} from 'src/app/core/models/role'
import { LibraryTypeCodes } from 'src/app/core/enums/library-types.enum';
import { DataMap }from '@grapecity/wijmo.grid';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { WjFlexGrid } from '@grapecity/wijmo.angular2.grid';
import { AllowSorting, FlexGrid, HeadersVisibility, SelectionMode } from '@grapecity/wijmo.grid';
import { SortDescription } from '@grapecity/wijmo';
import { UUID } from 'angular2-uuid';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';



@Component({
  selector: 'vex-project-profile',
  templateUrl: './project-profile.component.html',
  styleUrls: ['./project-profile.component.scss']
})
export class ProjectProfileComponent implements OnInit, OnDestroy {

    // @Output() dateInput: EventEmitter<MatDatepickerInputEvent<Date>>;
    @Input() date?: Date;
    @Output() dateChange = new EventEmitter<Date>();

    @ViewChild('grid', { static: true }) grid: FlexGrid;
    
    layoutCtrl = new UntypedFormControl('fullwidth');
    projectProfileComponents$ = new BehaviorSubject<IProjectProfileComponents[]>([]);
    totalProjectProfileComponents$ = new BehaviorSubject<number>(0);
    projectProfileComponentToAdd: IProjectProfileComponents[] = [];
    types: ILibraryTypes[];
    libraryTypes = [];
    id: number;

    projectProfileComponentData = this.getProjectProfileComponentData(0);
    projectProfileClassification: any [] = [];
    projectProfileStage: any [] = [];
    projectProfileStageForWijmo: any [] = [];
    transmissionGrid: any [] = [];
    hasAccess = false;
    userId: number;
    roles: IRole[] = [];
    roleIds: number[] = [];
    isAdmin: boolean = false;
    isSaving: boolean;
    pageMode: PageMode;
    form: FormGroup; 
    statusDate: Date | null = null;
    statusLabel: string = 'Active';
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;

    data = [{}];
  
    get formControls() {
      return {
        projectName: this.form.get('projectName'),
        projClassSeq: this.form.get('projClassSeq'),
        projStageSeq: this.form.get('projStageSeq'),
        tpsrMonth: this.form.get('tpsrMonth'),
        noOfComponentsCompleted: this.form.get('noOfComponentsCompleted'),
        noOfComponentsUnderConstruction: this.form.get('noOfComponentsUnderConstruction'),
        latestInspectionDate: this.form.get('latestInspectionDate'),
        totalAmrCost: this.form.get('totalAmrCost'),
        recordedAMR: this.form.get('recordedAMR'),
        unrecordedAMR: this.form.get('unrecordedAMR'),
        remarks: this.form.get('remarks'),
        udf1: this.form.get('udf1'),
        udf2: this.form.get('udf2'),
        udf3: this.form.get('udf3'),
        isActive: this.form.get('isActive'),
        statusDate: this.form.get('statusDate'),
        projectProfileComponents: this.projectProfileComponentData
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
        totalAmrCost: [''],
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
          //this.projectProfileComponentData = new wjcCore.CollectionView(data.projectProfileComponents, { pageSize: 5 });
          this._initializeData(data);
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
      this._getUserRole();
      this._getLookUps();
      // if(!isNaN(this.id))
      // this.projectProfileComponentData = this.getProjectProfileComponentData(this.id);
    }

    ngOnDestroy(): void {
      this._onDestroy$.next();
      this._onDestroy$.complete();
    }

    initFlexGrid(flexGrid: WjFlexGrid): void {
      const options: any = {
        isReadOnly: true,
        allowSorting: AllowSorting.MultiColumn
      };
      flexGrid.initialize(options);
      flexGrid.columnHeaders.rows.defaultSize = 40;
      flexGrid.selectionMode = SelectionMode.None;
      flexGrid.headersVisibility = HeadersVisibility.Column;
      flexGrid.allowAddNew = true;
      flexGrid.allowDelete = true;
      flexGrid.collectionView.sortDescriptions.clear();
      flexGrid.collectionView.sortDescriptions.push(new SortDescription('projectProfileSeq', false));
      flexGrid.collectionView.refresh();
    }

    fieldComparison(field1: any, field2: any): boolean {
      return field1?.parentId === field2;
    }

    onToggleStatus($event: any): void {
      this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
    }

    porjectStageChange(tempKey: string, event: any): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).projectStageSeq = event.value.parentId;
    }

    transmissionGridChange(tempKey: string, event: any): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).transmissionGridSeq = event.value.parentId;
    }

    startDateChange(tempKey: string, event: any): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).startDate = event.value;
    }

    targetDateChange(tempKey: string, event: any): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).targetDate = event.value;
    }

    completionDateChange(tempKey: string, event: any): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).completionDate = event.value;
    }

    nameInput(tempKey: string, value: string): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).componentName = value;
      console.log('tempkey:' + tempKey + ' value: ' + value);
    }

    detailInput(tempKey: string, value: string): void {
      this.projectProfileComponentToAdd.find(t => t.tempKey === tempKey).details = value;
    }

    addComponent(): void {
      const newItem = {
        id: null,
        tempKey: UUID.UUID(),
        projectProfileSeq: '',
        componentName: '',
        details: '',
        projectStageSeq: '',
        transmissionGridSeq: '',
        startDate: '',
        targetDate: '',
        completionDate: '',
        inspectionDate: '',
        initialAMRMonth: '',
        isRemoved: false,
        action: '',
      };
      this.grid.collectionView.sourceCollection.unshift(newItem);
      this.grid.collectionView.refresh();
    }

    deleteComponent(item: any): void {
      const index = this.grid.collectionView.items.indexOf(item);
      this.grid.collectionView.sourceCollection.splice(index, 1);
      this.grid.collectionView.refresh();
    }

    save(): void {
      this.isSaving = true;
      const collectionView = this.grid.collectionView;
      const allItems = collectionView.sourceCollection as any[];
      // const projectProfileComponentDTOArray: IProjectProfileComponents[] = allItems.map((item: any) => {
      //   return {
      //     id: item.id || 0,
      //     pjcId: this.id || 0,
      //     projectComponent: item.projectComponent,
      //     details: item.details,
      //     projectStageSeq: item.projectStageSeq,
      //     transmissionGridSeq: item.transmissionGridSeq,
      //     startDate: item.startDate,
      //     targetDate: item.targetDate,
      //     completionDate: item.completionDate,
      //     dateRemoved: null,
      //     createdBy: parseInt(localStorage.getItem('user_id')),
      //     createdAt: this.createdAt = new Date(),
      //     updatedBy: parseInt(localStorage.getItem('user_id')),
      //     updatedAt: null,
      //     projectProfileId: this.id || 0
      //   };
      // });

      console.log('allitems', allItems);
      // console.log(projectProfileComponentDTOArray);

      const data = Object.assign({}, this.form.value);
      this.projectProfileComponentToAdd.map(t => t.id = data.id);
      data.isActive = data.isActive ? 'Y' : 'N'; 
      data.projectProfileComponentDTOArray = this.projectProfileComponentToAdd;


      const projectProfileDTO: IProjectProfile = {
        id: this.id || 0,
        projectName: this.formControls.projectName.value,
        projClassSeq: this.formControls.projClassSeq.value,
        projStageSeq: this.formControls.projStageSeq.value,
        tpsrMonth: this.formControls.tpsrMonth.value,
        noOfComponentsCompleted: this.formControls.noOfComponentsCompleted.value,
        noOfComponentsUnderConstruction: this.formControls.noOfComponentsUnderConstruction.value,
        latestInspectionDate: this.formControls.latestInspectionDate.value,
        totalAmrCost: this.formControls.totalAmrCost.value,
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
        projectProfileComponentsDTO: data.projectProfileComponentDTOArray,
        status: '',
        createdByName: '',
        updatedByName: '',
        // projectProfileComponentModel: [],
        projectProfileComponents: []
      };

      if (this.pageMode === 1) {
        projectProfileDTO.id = 0;
        projectProfileDTO.createdBy = localStorage.getItem('user_id');
        projectProfileDTO.isActive = data.isActive ? 'Y' : 'N'; 
        projectProfileDTO.statusDate = new Date();
        // projectProfileDTO.projectProfileComponentsDTO = projectProfileComponentDTOArray;

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
        projectProfileDTO.id = parseInt(this._route.snapshot.paramMap.get('id'));
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
        projectName: data.projectName,
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
      projectProfileDTO.statusDate = new Date(); //testing
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
        projectName: data.projectName,
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
        this.transmissionGrid = data.filter(type => type.dropdownCode === LibraryTypeCodes.ProjectProfileTransmissionGrid);
      })
    }

    private _getUserRole(): void {
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

    private _initializeData(data): void {
      console.log(data);
      this.form.patchValue({
        projectName: data.projectName || '',
        projClassSeq: data.projClassSeq || '',
        projStageSeq: data.projStageSeq || '',
        tpsrMonth: data.tpsrMonth || new Date(),
        noOfComponentsCompleted: data.noOfComponentsCompleted || '',
        noOfComponentsUnderConstruction: data.noOfComponentsUnderConstruction || '',
        latestInspectionDate: data.latestInspectionDate || '',
        totalAmrCost: data.totalAmrCost,
        recordedAMR: data.recordedAMR || '',
        unrecordedAMR: data.unrecordedAMR || '',
        udf1: data.udF1 || '',
        udf2: data.udF2 || '',
        udf3: data.udF3 || '',
        remarks: data.remarks || '',
        isActive: data.isActive === 'Y' ? true : false,
        status: data.status || '',
      });
      data.projectProfileComponents.forEach(item => {
        const newItem: IProjectProfileComponents = {
          id: item.id,
          tempKey: UUID.UUID(),
          projectProfileSeq: item.id || '',
          componentName: item.componentName || '',
          details: item.details || '',
          projectStageSeq: item.projectStageSeq,
          transmissionGridSeq: item.transmissionGridSeq,
          startDate: item.startDate,
          targetDate: item.targetDate,
          completionDate: item.completionDate,
          inspectionDate: item.inspectionDate,
          initialAMRMonth: item.initialAMRMonth,
          isRemoved: false
        };
        this.projectProfileComponentToAdd.push(newItem);
        console.log(newItem);
      });
      this.projectProfileComponents$.next(this.projectProfileComponentToAdd);
      this.totalProjectProfileComponents$.next(data.details?.length);

      console.log('ppc$', data.details);
    }

    private _getPermissions(): void {
      this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditProjectProfile);
        this.hasAccess = permission.some(s => s.isUpdate);
      });
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
}
