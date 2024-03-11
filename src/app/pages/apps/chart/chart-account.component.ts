import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { IChart, IChartDetails } from 'src/app/core/models/chart';
import { ILibraryTypes } from "../../../core/models/library-types";
import { MatSelectChange } from '@angular/material/select';
import * as wjcCore from '@grapecity/wijmo';
import { CollectionViewNavigator } from '@grapecity/wijmo.input';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { ILibraryTypeOption } from 'src/app/core/models/library-type-option';
import { isEqual} from 'lodash';

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
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      accountgroup: ['', [Validators.required]],
      subaccount: ['', [Validators.required]],
      rcagl: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      rcasl: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], 
      title: ['', [Validators.required]],
      isActive: [true, []],
    });
  }

  ngOnInit(): void {
    this.salesData = this.getSalesData(0);
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      const libraryTypes: ILibraryTypes[] = data;
      this.filteredLibraryTypes = libraryTypes.filter(type => type.code === 'ACG');
    });

    if (this.id) {
      this.isEditMode = true;
      this.form.get('accountgroup')?.disable();
      if (this.isEditMode) {
        this._portalService.getChartOfAccountsById(this.id)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(
            (data: IChart) => {
              this.salesData = new wjcCore.CollectionView(data.chartOfAccountDetailModel, { pageSize: 5 });
              new CollectionViewNavigator('#thePager', {
                byPage: true,
                headerFormat: 'Page {currentPage:n0} of {pageCount:n0}',
                cv: this.salesData
              });
              const selectedLibraryType = this.filteredLibraryTypes.find(type => type.name === data.acountGroup);
              this._portalService.getLibraryTypeOptions()
                .pipe(takeUntil(this._onDestroy$))
                .subscribe(libraryData => {
                  if (!libraryData) {
                    return;
                  }
                  const libraryOptions = libraryData;
                  this.filteredOptions = libraryOptions.filter(type => parseInt(type.libraryTypeId) === selectedLibraryType.id);
                  this.filteredLibraryOptions = this.filteredOptions.filter(type => type.description === data.subAcountGroup);
                  const selectedLibraryOption = this.filteredLibraryOptions[0];

              this.form.setValue({
                accountgroup: selectedLibraryType.id,
                subaccount:  selectedLibraryOption.id,
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
  
  onLibraryTypeSelected(event: MatSelectChange): void {
    this.selectedLibraryTypeId = event.value;
    this._portalService.getLibraryTypeOptions()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(libraryData => {
        if (!libraryData) {
          return;
        }
        const libraryOptions = libraryData;
        this.filteredLibraryOptions = libraryOptions.filter(type => parseInt(type.libraryTypeId) === this.selectedLibraryTypeId);
      });
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
    
          this._portalService.addChartOfAccounts(chartOfAccounts)
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
              let snackBarRef = this._snackBar.open('Chart of Accounts added successfully.', 'Close', {
                duration: 3000,
              });
              snackBarRef.afterDismissed().subscribe(() => {
                window.location.reload();
            });
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