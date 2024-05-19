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
import { IPlantInformationCostCenter } from 'src/app/core/models/plant-information';

@Component({
  selector: 'vex-plant-information',
  templateUrl: './plant-information.component.html',
  styleUrls: ['./plant-information.component.scss']
})
export class PlantInformationComponent implements OnInit, OnDestroy {
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
  plantInformationCostCenterData = this.getPlantInformationCostCenterData(5);
  hasAccess = false;
  
 installationType: any [] = [];
 districtOffice: any [] = [];
 plantInfoClassification: any [] = [];
 transmissionGrid: any[] = [];
 facilityLocation: any[] = [];
 regions: any[] = [];
 provinces: any[] = [];
 municipalities: any[] =[];
 barangays: any[] =[];

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
  
  
  getPlantInformationCostCenterData(count: number) {
    const maxRowsToShow = 5;
    const pageSize = Math.min(count, maxRowsToShow);

    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        plantCode: '',
        substationName: '',
        action: '',
      });
    }
    const collectionView = new wjcCore.CollectionView(data, { pageSize });
    return collectionView;
  }


  get formControls() {
    return {
      plantCode: this.form.get('plantCode'),
      substationName: this.form.get('substationName'),
      classId: this.form.get('classId'),
      substationNameOld: this.form.get('substationNameOld'),
      transGrid: this.form.get('transGrid'),
      districtId: this.form.get('districtId'),
      mtd: this.form.get('mtd'),
      commisioningDate: this.form.get('commisioningDate'),
      googleMapCoordinates: this.form.get('googleMapCoordinates'),
      udf1: this.form.get('udf1'),
      udf2: this.form.get('udf2'),
      udf3: this.form.get('udf3'),
      regionId: this.form.get('regionId'),
      munId: this.form.get('munId'),
      provId: this.form.get('provId'),
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
    private _router: Router
  ) {
    this.form = this._fb.group({
      plantCode: ['', [Validators.required]],
      substationName: ['', [Validators.required]],
      classId: [''],
      substationNameOld: [''],
      transGrid: [''],
      districtId: [''],
      mtd: [''],
      commisioningDate: [''],
      googleMapCoordinates: [''],
      udf1: [''],
      udf2: [''],
      udf3: [''],
      regionId: [''],
      munId: [''],
      provId: [''],
      brgyId: [''],
      isActive: [true],
      status: [''],
      statusDate: ['']
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;

    if (this.pageMode === 2) {
      this._portalService.getPlantInformation(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }

        this.form.patchValue({
          plantCode: data.plantCode || '',
          substationName: data.substationName || '',
          classId: data.classId || '',
          substationNameOld: data.substationNameOld || '',
          transGrid: data.transGrid || '',
          districtId: data.districtId || '',
          mtd: data.mtd || '',
          commisioningDate: data.commisioningDate || '',
          googleMapCoordinates: data.googleMapCoordinates || '',
          udf1: data.udf1 || '',
          udf2: data.udf2 || '',
          udf3: data.udf3 || '',
          regionId: data.regionId || '',
          munId: data.munId || '',
          provId: data.provId || '',
          brgyId: data.brgyId || '',
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
    // this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    // this.plantInformationCostCenterData = this.getPlantInformationCostCenterData(this.id);

    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.installationType = data.filter(type => type.code =='INT');
      this.plantInfoClassification = data.filter(type => type.code =='MC');
      this.transmissionGrid = data.filter(type => type.code === 'TRG');
      this.districtOffice = data.filter(type => type.code === 'DTO');
      this.facilityLocation = data.filter(type => type.code == 'FL');
    })

    this._portalService.getRegions()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      console.log("data");
      console.log(data);
      if(!data){
        return;
      }
      this.regions = data;
    })

    this._portalService.getProvinces()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      this.provinces = data;
    })

    this._portalService.getMunicipalities()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      this.municipalities = data;
    })

    this._portalService.getBarangays()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      this.barangays = data;
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

    const wijmoInvalid = this.plantInformationCostCenterData.sourceCollection.some((item: any) => {
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
      const plantInformationCostCenterDTOArray: IPlantInformationCostCenter[] = allItems.map((item: any) => {
        return {
          id: item.id || 0,
          plantInformationId: this.id || 0,
          costCenterType: item.costCenterType,
          costCenterNo: item.costCenterNo,
          costCenter: item.costCenter,
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
      data.plantInformationCostCenterDTO = plantInformationCostCenterDTOArray;

      this._portalService.createPlantInformation(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Plant Infomration has been successfully added.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigateByUrl('apps/plant-information');
        });
      });
    }
    else if (this.pageMode === 2) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));

      this._portalService.updatePlantInformation(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Plant information has been successfully updated.', 'Close');
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
