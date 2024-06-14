import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl    } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { LibraryTypeCodes } from 'src/app/core/enums/library-types.enum';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { PortalService } from 'src/app/core/services/portal.service';
import * as wjcCore from '@grapecity/wijmo';
import { IPlantInformationCostCenter } from 'src/app/core/models/plant-information';
import { DataMap }from '@grapecity/wijmo.grid';
import { SecurityService } from 'src/app/core/services/security.service';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { IRole } from 'src/app/core/models/role';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'vex-plant-information',
    templateUrl: './plant-information.component.html',
    styleUrls: ['./plant-information.component.scss']
})
export class PlantInformationComponent implements OnInit, OnDestroy {
    @ViewChild('plantInformationCostCenterGrid') plantInformationCostCenterGrid: FlexGrid;
    pageMode: PageMode;
    libraryTypeCodes: LibraryTypeCodes;
    form: FormGroup; 
    layoutCtrl = new UntypedFormControl('fullwidth');
    statusLabel: string = 'Active';
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;
    types: ILibraryTypes[];
    libraryTypes = [];
    plantCode: string;
    plantInformationCostCenterData = this.getPlantInformationCostCenterData(0);
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
    costCenterTypes = [{}];
    costCenterTypesMap = new DataMap(this.costCenterTypes, 'libraryTypeId', 'parentValue');
    addMode: boolean = true;
    isEditMode: boolean = false;
    isAdmin: boolean = false;
    roleIds: number[] = [];
    userId: number;
    roles: IRole[] = [];
    isSaving: boolean = false;
    
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
            statusDate: this.form.get('statusDate'),
        };
    }

    private _onDestroy$ = new Subject<void>();
 
    constructor(
        private _fb: FormBuilder,
        private _route: ActivatedRoute,
        private _portalService: PortalService,
        private _snackBar: MatSnackBar,
        private _router: Router,
        private _cdr: ChangeDetectorRef,
        private _securityService: SecurityService,
        private _dialog: MatDialog
    ) {
        this.form = this._fb.group({
            plantCode: ['', [Validators.required]],
            substationName: ['', [Validators.required]],
            classId: [''],
            substationNameOld: [''],
            transGrid: ['', [Validators.required]],
            districtId: ['', [Validators.required]],
            mtdId: ['', [Validators.required]],
            commissionDate: [''],
            gmapCoord: [''],
            udF1: [''],
            udF2: [''],
            udF3: [''],
            regionId: [''],
            munId: [''],
            provId: [''],
            brgyId: [''],
            isActive: [true],
            status: [''],
            statusDate: ['']
        });
        const plantCode = this._route.snapshot.paramMap.get('plantcode');
        this.pageMode = this._route.snapshot.data.pageMode;
        if (this.pageMode === 2) {
            this.addMode = false;
            this._portalService.getPlantInformation(plantCode)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
                if (!data) {
                    return;
                }
                this._patchValues(data);

                this.statusLabel = data.isActive === 'Y' ? 'Active' : 'Inactive'; 
                this.createdBy = data.createdByName;
                this.createdAt = data.createdAt;
                this.updatedBy = data.updatedByName || 'N/A';
                this.updatedAt = data.updatedAt;
                this.plantInformationCostCenterData = new wjcCore.CollectionView(
                    data.plantInformationDetail.map(item => ({
                      costCenterType: item.costCenterTypeLto, 
                      costCenterNo: item.costCenter                      ,
                    })),
                    { pageSize: 5 }
                  );
                this._cdr.detectChanges();
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

    onToggleStatus($event: any): void {
        this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
    }

    getPlantInformationCostCenterDataCount(): number {
        if(!this.plantInformationCostCenterGrid) {
          return 0;
        }
        const collectionView = this.plantInformationCostCenterGrid.collectionView;
        const allItems = collectionView.sourceCollection as any[];
        return allItems.length;
    }
    
    addNewRow(): void {
        const newItem = {
            plantCode: '',
            costCenter: '',
            costCenterTypeLto: '',
            action: '',
        };
        this.plantInformationCostCenterGrid.collectionView.sourceCollection.unshift(newItem);
        this.plantInformationCostCenterGrid.collectionView.refresh();
    }

    onDeleteRow(item: any): void {
            const index = this.plantInformationCostCenterGrid.collectionView.items.indexOf(item);
                this.plantInformationCostCenterGrid.collectionView.sourceCollection.splice(index, 1);
                this.plantInformationCostCenterGrid.collectionView.refresh();
    } 

    getPlantInformationCostCenterData(count: number) {
        const maxRowsToShow = 5;
        const pageSize = Math.min(count, maxRowsToShow);

        const data = [];
        for (let i = 0; i < count; i++) {
            data.push({
                plantCode: '',
                costCenter: '',
                costCenterTypeLto: '',
                action: '',
            });
        }
        const collectionView = new wjcCore.CollectionView(data, { pageSize });
        return collectionView;
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
              this.isSaving = false;  
              return;
            }
            if (this.pageMode == 2) {
                data.updatedBy = parseInt(localStorage.getItem('user_id'));
                data.plantInformationDetailDTO = plantInformationDetailDTO;
                this._updatePlantInformation(data);
            } else {
                data.createdBy = parseInt(localStorage.getItem('user_id'));
                data.statusDate = new Date();
                data.plantInformationDetailDTO = plantInformationDetailDTO;
                this._createPlantInformation(data);
            }
          });

        const wijmoInvalid = this.plantInformationCostCenterData.sourceCollection.some((item: any) => {
            return item.costCenterType === '' || /^[a-zA-Z]+$/.test(item.costCenterType) || item.costCenterNo === '' || /^[a-zA-Z]+$/.test(item.costCenterNo) || item.faisRefNo === '';
        });
        if (wijmoInvalid) {
            this._snackBar.open('Please fill in or delete the rows in the table.', 'Close', {
            duration: 5000,
            });
            return;
        }
        const collectionView = this.plantInformationCostCenterGrid.collectionView;
        const allItems = collectionView.sourceCollection as any[];

        const plantInformationDetailDTO: IPlantInformationCostCenter[] = allItems.map((item: any) => {
            return {
                id: item.id,
                costCenter: item.costCenterNo,
                costCenterTypeLto: item.costCenterType,
                createdBy: parseInt(localStorage.getItem('user_id')),
                createdAt: this.createdAt = new Date()
            };
        });
        const data = Object.assign({}, this.form.value);
        data.id = parseInt(this._route.snapshot.paramMap.get('id'));
        data.isActive = data.isActive ? 'Y' : 'N'; 
    }

    private _patchValues(data): void {
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
            isActive: data.isActive || 'Y',
            status: data.status || '',
            statusDate: data.statusDate || ''
        });
 
    }

    private _createPlantInformation(data: any) : void {
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
                if(!data){
                  return;
                }
              })

            let snackBarRef = this._snackBar.open('Plant Information has been successfully added.', 'Close');
            snackBarRef.afterDismissed().subscribe(() => {
                this._router.navigateByUrl('apps/plant-information');
            });
        });
    }

    private _updatePlantInformation(data) {
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

          this.costCenterTypes = data.filter(type => type.dropdownCode === LibraryTypeCodes.CostCenterType).map(type => ({
            id: type.libraryTypeId,
            name: type.parentValue
          }));
          this.costCenterTypesMap = new DataMap(this.costCenterTypes, 'id', 'name');
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
