import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { IChart, IChartDetails } from 'src/app/core/models/chart';
import { ILibraryTypes } from "../../../core/models/library-types";
import { MatSelectChange } from '@angular/material/select';
import * as wjcCore from '@grapecity/wijmo';
import { CollectionViewNavigator } from '@grapecity/wijmo.input';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { DropdownValueModel, ILibraryTypeOption } from 'src/app/core/models/library-type-option';
import { SecurityService } from 'src/app/core/services/security.service';
import { ModuleEnum } from 'src/app/core/enums/module-enum';

@Component({
  selector: 'vex-chart',
  templateUrl: './chart-account.component.html',
  styleUrls: ['./chart-account.component.scss'],
})

export class ChartAccountComponent implements OnInit, OnDestroy {
  @ViewChild('salesGrid') salesGrid: FlexGrid;
  form: FormGroup;
  layoutCtrl = new FormBuilder().control('fullwidth');
  statusLabel = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  isEditMode: boolean = false;
  filteredLibraryTypes: ILibraryTypes[] = [];
  filteredLibraryOptions: ILibraryTypeOption[] =[];
  filteredOptions: ILibraryTypeOption[] =[];
  id: number;
  selectedLibraryTypeId: number;
  selectedItems: any[] = [];
  salesData = this.getSalesData(5);
  statusDate: Date | null = null;
  initialFormValues: any;
  chartData: IChart | null = null;
  hasAccess = false;
  parentValue: DropdownValueModel[] = [];
  childValue: any [] = [];
  subAccountControl = new FormControl();
  selectedParent: DropdownValueModel | null = null;

  addNewRow(): void {
    const newItem = {
      gl: '',
      sl: '',
      ledgerTitle: '',
      action: '',
    };
    this.salesGrid.collectionView.sourceCollection.unshift(newItem);
    this.salesGrid.collectionView.refresh();
  }
  
  onDeleteRow(item: any): void {
   
      const index = this.salesGrid.collectionView.items.indexOf(item);
        this.salesGrid.collectionView.sourceCollection.splice(index, 1);
        this.salesGrid.collectionView.refresh();
  }

  getSalesData(count: number) {
    const maxRowsToShow = 5;
    const pageSize = Math.min(count, maxRowsToShow);

    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        gl: '',
        sl: '',
        ledgerTitle: '',
        action: '',
      });
    }
    const collectionView = new wjcCore.CollectionView(data, { pageSize });
    return collectionView;
  }

  get formControls() {
    return {
      accountgroup: this.form.get('accountgroup'),
      subaccount: this.form.get('subaccount'),
      rcagl: this.form.get('rcagl'),
      rcasl: this.form.get('rcasl'),
      title: this.form.get('title'),
      isActive: this.form.get('isActive')
    };
  }
  
  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _securityService: SecurityService
  ) {
    this.form = this._fb.group({
      accountgroup: ['', [Validators.required]],
      subaccount: ['', [Validators.required]],
      rcagl: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      rcasl: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], 
      title: ['', [Validators.required]],
      isActive: [true, []],
    });
    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditChartOfAccounts);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if(permission.some(s => s.isUpdate) === false) {
          this.form.controls['accountgroup'].disable();
          this.form.controls['subaccount'].disable();
          this.form.controls['rcagl'].disable();
          this.form.controls['rcasl'].disable();
          this.form.controls['title'].disable();
          this.form.controls['isActive'].disable();
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });
    }

  ngOnInit(): void {
    this.salesData = this.getSalesData(0);
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getDropdownValues(['ACG'])
    .pipe(takeUntil(this._onDestroy$))
    .subscribe((data: DropdownValueModel[]) => {
      if (!data) {
        return;
      }
      this.parentValue = data;
    });

      this.form.get('accountgroup')?.valueChanges.subscribe((parentId) => {
      this.selectedParent = this.parentValue.find(parent => parent.parentId === parentId);
    });
  
  

    if (this.id) {
      this.isEditMode = true;
      this.form.get('accountgroup')?.disable();
      if (this.isEditMode) {
        this._portalService.getChartOfAccountsById(this.id)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(
            (data: IChart) => {
              this.chartData = data;
              this.salesData = new wjcCore.CollectionView(data.chartOfAccountDetailModel, { pageSize: 5 });
              new CollectionViewNavigator('#thePager', {
                byPage: true,
                headerFormat: 'Page {currentPage:n0} of {pageCount:n0}',
                cv: this.salesData
              });
            
              this._portalService.getLibraryTypeOptions()
                .pipe(takeUntil(this._onDestroy$))
                .subscribe(libraryData => {
                  if (!libraryData) {
                    return;
                  }

                this.filteredOptions = libraryData.filter(type => parseInt(type.libraryTypeId) === data.accountGroupId);
                this.filteredLibraryOptions = this.filteredOptions.filter(type => type.description === data.subAcountGroup);
                this.form.setValue({
                accountgroup: data.accountGroupId,
                subaccount: this.chartData.subAccountGroupId, 
                rcagl: data.rcaGL,
                rcasl: data.rcaSL,
                title: data.rcaLedgerTitle,
                isActive: data.isActive,    
              });

              this.initialFormValues = this.form.value;
              this.statusDate = data.statusDate
              this.createdBy = data.createdBy
              this.updatedBy = data.updatedBy || 'NA'
              this.updatedAt = data.updatedAt 
              this.createdAt = data.createdAt
            });
          });
      }
    }
  
    else {
      new CollectionViewNavigator('#thePager', {
        byPage: true,
        headerFormat: 'Page {currentPage:n0} of {pageCount:n0}',
        cv: this.salesData
      });
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
    const wijmoValid = this.salesData.sourceCollection.some((item: any) => {
      return item.gl === '' || /^[a-zA-Z]+$/.test(item.gl) || item.sl === '' || /^[a-zA-Z]+$/.test(item.sl) || item.ledgerTitle === '';
    });
      if (wijmoValid) {
        this._snackBar.open('Please fill in or delete the rows in the table.', 'Close', {
          duration: 5000,
        });
        return;
      }
 
      const collectionView = this.salesGrid.collectionView;  
      const allItems = collectionView.sourceCollection as any[];
    
       const chartOfAccountDetailsDTOArray: IChartDetails[] = allItems.map((item: any) => {
        return {
          id: item.id || 0, 
          chartOfAccountsId: this.id || 0,  
          gl: item.gl,
          sl: item.sl,
          ledgerTitle: item.ledgerTitle,
          dateRemoved: null,
          createdBy: parseInt(localStorage.getItem('user_id')),
          createdAt: this.createdAt = new Date(),
          updatedBy: parseInt(localStorage.getItem('user_id')),
          updatedAt: null
        };
      });

      const chartOfAccounts: IChart = {
        id: this.id || 0, 
        accountGroupId: this.formControls.accountgroup.value,
        subAccountGroupId: this.formControls.subaccount.value,
        acountGroup: '',
        subAcountGroup: '',
        rcaGL: this.formControls.rcagl.value,
        rcaSL: this.formControls.rcasl.value,
        rcaLedgerTitle: this.formControls.title.value,
        isActive: this.formControls.isActive.value ? 'Y' : 'N',
        statusDate: this.areFormsEqual(this.initialFormValues, this.form.value) ? this.statusDate : new Date(),
        createdBy: (localStorage.getItem('user_id')),
        createdAt: this.createdAt = new Date(),
        updatedBy: (localStorage.getItem('user_id')),
        updatedAt: this.updatedAt,
        chartOfAccountDetailsDTO: chartOfAccountDetailsDTOArray,
        chartOfAccountDetailModel: []
      };

      if (this.isEditMode) {
        this._portalService.updateChartOfAccounts(this.id, chartOfAccounts)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }

            if (data.errorDescription) {
              this._snackBar.open(data.errorDescription, 'Close', {
                duration: 3000,
              });
            } else {
              let snackBarRef = this._snackBar.open('Chart of Accounts updated successfully.', 'Close', {
                duration: 3000,
              });
              snackBarRef.afterDismissed().subscribe(() => {
                window.location.reload();
              });
          }
          });
        } else {
          this._portalService.createChartOfAccounts(chartOfAccounts)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }
            if (data.errorDescription) {
              this._snackBar.open(data.errorDescription, 'Close', {
                duration: 3000,
              });
            } else {
                this._snackBar.open('Chart of Accounts added successfully.', 'Close', {
                duration: 3000
              });
              setTimeout(() => {
                this._router.navigate([`apps/chart-accounts/edit/${data.id}`]); 
              }, 2000);
            }
          });
        }
      }
        

  private areFormsEqual(formValue1: any, formValue2: any): boolean {
    const convertNumberToString = (obj: any) => {
      for (const key in obj) {
        if (typeof obj[key] === 'number') {
          obj[key] = obj[key].toString();
        }
      }
    };
    convertNumberToString(formValue1);
    convertNumberToString(formValue2);
    return JSON.stringify(formValue1) === JSON.stringify(formValue2) ;
  }
  }