import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl    } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { LibraryTypeCodes } from 'src/app/core/enums/library-types.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { AllowSorting, FlexGrid, HeadersVisibility, SelectionMode } from '@grapecity/wijmo.grid';
import { PortalService } from 'src/app/core/services/portal.service';
import * as wjcCore from '@grapecity/wijmo';
import { IPlantInformation, IPlantInformationDetails } from 'src/app/core/models/plant-information';
import { DataMap }from '@grapecity/wijmo.grid';
import { SecurityService } from 'src/app/core/services/security.service';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { IRole } from 'src/app/core/models/role';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { WjFlexGrid } from '@grapecity/wijmo.angular2.grid';
import { SortDescription } from '@grapecity/wijmo';
import { DropdownValueModel } from 'src/app/core/models/library-type-option';
import { UUID } from "angular2-uuid";
export interface IPlantDetails {
  id: number;
  tempKey: string;
  plantCode: string;
  costCenterType: number;
  costCenterNo: string;
  isRemoved: boolean
}  

@Component({
    selector: 'vex-plant-information',
    templateUrl: './plant-information.component.html',
    styleUrls: ['./plant-information.component.scss']
})
export class PlantInformationComponent implements OnInit, OnDestroy {
    @ViewChild('grid', { static: true }) grid: FlexGrid;
    layoutCtrl = new UntypedFormControl('fullwidth');
    plantInfoDetails$ = new BehaviorSubject<IPlantDetails[]>([]);
    totalCostCenter$ = new BehaviorSubject<number>(0);
    costCenterTypes: DropdownValueModel[] = [];
    plantDetailsToAdd: IPlantDetails[] = [];
    plantCode: string;


    pageMode: PageMode;
    libraryTypeCodes: LibraryTypeCodes;
    form: FormGroup; 
    
    statusLabel: string = 'Active';
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    types: ILibraryTypes[];
    libraryTypes = [];
    hasAccess = false;
    costCenterType: any [] = [];
    districtOffice: any [] = [];
    mtdList: any [] = [];
    plantInfoClassification: any [] = [];
    transmissionGrid: any[] = [];
    regions: any[] = [];
    provinces: any[] = [];
    municipalities: any[] =[];
    barangays: any[] =[];
    addMode: boolean = true;
    isEditMode: boolean = false;
    isAdmin: boolean = false;
    roleIds: number[] = [];
    userId: number;
    roles: IRole[] = [];

    get formControls() {
      return {
        plantCode: this.form.get('plantCode'),
        substationName: this.form.get('substationName'),
        substationNameOld: this.form.get('substationNameOld'),
        classId: this.form.get('classId'),
        transGrid: this.form.get('transGrid'),
        districtId: this.form.get('districtId'),
        mtdId: this.form.get('mtdId'),
        gmapCoord: this.form.get('gmapCoord'),
        commissionDate: this.form.get('commissionDate'),
        udF1: this.form.get('udF1'),
        udF2: this.form.get('udF2'),
        udF3: this.form.get('udF3'),
        regionId: this.form.get('regionId'),
        provId: this.form.get('provId'),
        munId: this.form.get('munId'),
        brgyId: this.form.get('brgyId'),
        isActive: this.form.get('isActive'),
        //statusDate: this.form.get('statusDate')
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
      this.plantCode = this._route.snapshot.paramMap.get('plantcode');
      this.form = this._fb.group({
        plantCode: ['', [Validators.required]],
        substationName: ['', [Validators.required]],
        classId: [''],
        substationNameOld: [''],
        transGrid: ['', []],
        districtId: ['', []],
        mtdId: ['', []],
        commissionDate: ['', []],
        gmapCoord: [''],
        udF1: [''],
        udF2: [''],
        udF3: [''],
        regionId: [''],
        munId: [''],
        provId: [''],
        brgyId: [''],
        isActive: [true]
      });

      if (this.plantCode) {
        this._portalService.getPlantInformation(this.plantCode)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }
            this._initializeData(data);
            this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
            this.createdBy = data.createdByName;
            this.createdAt = data.createdAt;
            this.updatedBy = data.updatedByName || 'N/A';
            this.updatedAt = data.updatedAt;
          });
      }
    }

    ngOnInit(): void {
        this.userId = parseInt(localStorage.getItem('user_id'));
        
        this._getLookUps();
        this._getRegions();
        this._getProvinces();
        this._getMunicipalities();
        this._getBarangays();
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
      flexGrid.collectionView.sortDescriptions.push(new SortDescription('costCenterType', false));
      flexGrid.collectionView.refresh();
    }

    fieldComparison(field1: any, field2: any): boolean {
       return field1?.parentId === field2;
    }

    onToggleStatus($event: any): void {
      this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
    }

    costCenterTypeChange(tempKey: string, event: any): void {
      this.plantDetailsToAdd.find(t => t.tempKey === tempKey).costCenterType = event.value.parentId;
    }

    costCenterNoInput(tempKey: string, value: string): void {
      this.plantDetailsToAdd.find(t => t.tempKey === tempKey).costCenterNo = value;
    }

    addCostCenter(): void {
      const newItem: IPlantDetails = {
        id: null,
        tempKey: UUID.UUID(),
        plantCode: null,
        costCenterType: null,
        costCenterNo: null,
        isRemoved: false
      };
      this.plantDetailsToAdd.push(newItem);
      let cv = this.grid.collectionView;
      cv.sourceCollection.push(newItem);
      cv.refresh();
    }

    deleteCostCenter(item: any): void {
      const index = this.grid.collectionView.items.indexOf(item);
      this.grid.collectionView.sourceCollection.splice(index, 1);
      this.grid.collectionView.refresh();
    } 

    save(): void {
      if (!this.formControls.plantCode.value) {
        this.formControls.plantCode.markAsTouched();
        this.formControls.plantCode.updateValueAndValidity();
        return;
      }
      if (!this.formControls.substationName.value) {
        this.formControls.substationName.markAsTouched();
        this.formControls.substationName.updateValueAndValidity();
        return;
      }

      const data = Object.assign({}, this.form.value);
      this.plantDetailsToAdd.map(t => t.plantCode = data.plantCode);
      data.isActive = data.isActive ? 'Y' : 'N'; 
      data.details = this.plantDetailsToAdd;

      if (this.plantCode) {
        data.updatedBy = parseInt(localStorage.getItem('user_id'));
        this._updatePlantInfo(data);
        return;
      }

      data.createdBy = parseInt(localStorage.getItem('user_id'));
      this._createPlantInformation(data);
    }

    private _initializeData(data: IPlantInformation): void {
      this.form.patchValue({
        plantCode: data.plantCode || '',
        substationName: data.substationName || '',
        classId: data.classId || '',
        substationNameOld: data.substationNameOld || '',
        transGrid: data.transGrid || '',
        districtId: data.districtId || '',
        mtdId: data.mtdId || '',
        commissionDate: data.commissionDate || '',
        gmapCoord: data.gmapCoord || '',
        udF1: data.udF1 || '',
        udF2: data.udF2 || '',
        udF3: data.udF3 || '',
        regionId: data.regionId || '',
        munId: data.munId || '',
        provId: data.provId || '',
        brgyId: data.brgyId || '',
        isActive: data.isActive || 'Y'
      });

      data.details.forEach(item => {
        const newItem: IPlantDetails = {
          id: item.id,
          tempKey: UUID.UUID(),
          plantCode: data.plantCode,
          costCenterType: item.costCenterType,
          costCenterNo: item.costCenterNo,
          isRemoved: false
        };
        this.plantDetailsToAdd.push(newItem);
      });
      this.plantInfoDetails$.next(this.plantDetailsToAdd);
      this.totalCostCenter$.next(data.details?.length);
    }

    private _createPlantInformation(data: any) : void {
        const dialogRef = this._dialog.open(DialogComponent, {
            data: {
              cancelButtonLabel: "Cancel",
              confirmButtonLabel: "Yes, Proceed",
              dialogHeader: "Confirmation",
              dialogContent: "Are you sure you want to proceed saving?",
              moduleName: 'Metering Profile'
            },
            width: '450px'
          });
          dialogRef.afterClosed().subscribe(result => {
            if (!result) {
              return;
            }
            this._portalService.createPlantInformation(data)
                .pipe(takeUntil(this._onDestroy$))
                .subscribe(data => {
                    if (!data) {
                    return;
                    }
            
                    const notifData = {
                        roleIds: this.roleIds, 
                        id: data.plantCode,
                        assetName: data.substationName,
                        editMode: this.isEditMode,
                        isAdmin: this.isAdmin,
                        ModuleId: ModuleEnum.PlantInformation
                    };
                    this._securityService.postNotifRole(notifData)
                    .pipe(takeUntil(this._onDestroy$))
                    .subscribe(data => {
                        if (!data){
                            return;
                        }
                    });

                    let snackBarRef = this._snackBar.open('Plant information has been successfully added.', 'Close');
                    snackBarRef.afterDismissed().subscribe(() => {
                        this._router.navigateByUrl('apps/plant-information');
                    });
                });
          });
        
    }

    private _updatePlantInfo(data) {
        this._portalService.updatePlantInformation(data.plantCode, data)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
                if (!data) {
                    return;
                }

                const notifData = {
                    roleIds: this.roleIds, 
                    id: data.plantCode,
                    assetName: data.substationName,
                    editMode: this.isEditMode,
                    isAdmin: this.isAdmin,
                    ModuleId: ModuleEnum.PlantInformation
                  };
                  this._securityService.postNotifRole(notifData)
                  .pipe(takeUntil(this._onDestroy$))
                  .subscribe(data => {
                    if(!data){
                      return;
                    }
                  })

                let snackBarRef = this._snackBar.open('Plant information has been successfully updated.', 'Close');
                snackBarRef.afterDismissed().subscribe(() => {
                    window.location.reload();
                });
            });
    }

    private _getLookUps(): void {
        const codes = 
            [ LibraryTypeCodes.PlantInformationClass
            , LibraryTypeCodes.TransmissionGrid
            , LibraryTypeCodes.DistrictOffice
            , LibraryTypeCodes.MTD
            , LibraryTypeCodes.CostCenterType];

            this._getRoles().pipe(
                tap(() => this._checkFormFields()),  
                takeUntil(this._onDestroy$)
            ).subscribe();

        this._portalService.getDropdownValues(codes)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe((data) => {
          if (!data) {
            return;   
          }
          this.plantInfoClassification = data.filter(type => type.dropdownCode == LibraryTypeCodes.PlantInformationClass);
          this.transmissionGrid = data.filter(type => type.dropdownCode === LibraryTypeCodes.TransmissionGrid);
          this.districtOffice = data.filter(type => type.dropdownCode === LibraryTypeCodes.DistrictOffice);
          this.mtdList = data.filter(type => type.dropdownCode === LibraryTypeCodes.MTD);
          this.costCenterTypes = data.filter(type => type.dropdownCode === LibraryTypeCodes.CostCenterType)
        });
    }

    private _getRegions(): void {
        this._portalService.getRegions()
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
                if(!data){
                    return;
                }
                this.regions = data;
        });
    }

    private _getProvinces(): void {
        this._portalService.getProvinces()
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
                if(!data){
                    return;
                }
                this.provinces = data;
        });
    }

    private _getMunicipalities(): void {
        this._portalService.getMunicipalities()
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
                if(!data){
                    return;
                }
                this.municipalities = data;
        });
    }

    private _getBarangays(): void {
        this._portalService.getBarangays()
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
                if(!data){
                    return;
                }
                this.barangays = data;
        });
    }

    private _checkFormFields(): void {
        this._portalService.getUserRoles(this.userId)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if(!data){
            return;
          }
          const roleAuthorized = this._getRoleAuthorization(data)
          if (roleAuthorized.name === 'Administrator') {
           this.isAdmin = true;
           const administratorRole = this.roles.find(role => role.name === 'Administrator');
           this.roleIds.push(administratorRole.id)
          }
    
          if (roleAuthorized.name === 'PAD Librarian') {
            const meteringLibrarianRole = this.roles.find(role => role.name === 'PAD Librarian');
            this.roleIds.push(meteringLibrarianRole.id)
          }
        });

    }
    private _getRoleAuthorization(roles: any[]): any {
        const relevantRoles = roles.filter(role => this.roles.some(r => r.name === role.name && role.isActive === true));
        if (relevantRoles.length > 0) {
          const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.userRoleId < currentRole.userRoleId ? minRole : currentRole);
          return firstRole;
        }
      }
      
      private _getRoles(): Observable<IRole[]> {
        return this._portalService.getRoles().pipe(
          tap(roles => {
            if (!roles) {
              throw new Error('No roles found');
            }
            this.roles = roles;
          }),
          takeUntil(this._onDestroy$)
        );
      }
}