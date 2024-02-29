import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { IProFormaEntry, IProFormaEntryDetails } from 'src/app/core/models/pro-forma-entry';
import { ILibraryTypes } from "../../../core/models/library-types";
import { MatSelectChange } from '@angular/material/select';
import * as wjcCore from '@grapecity/wijmo';
import { CollectionViewNavigator } from '@grapecity/wijmo.input';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { ILibraryTypeOption } from 'src/app/core/models/library-type-option';

@Component({
  selector: 'vex-pro-forma-entry',
  templateUrl: './pro-forma-entry.component.html',
  styleUrls: ['./pro-forma-entry.component.scss']
})

export class ProFormaEntryComponent implements OnInit, OnDestroy {
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
  statusDate: Date = new Date();

  addNewRow(): void {
    const newItem = { faisrefno: '',
      transactionseq: '',
      costcenter: '',
      glno: '',
      rcagl: '',
      prefix: '',
      sl: '',
      otherscode: '',
      dce: '',
      plantcode: '',
      wo: '',
      refbillno: '',
      source: '',
      nature: '',
      ayyyy: '',
      fg: '',
      debit: '',
      credit: '',
      trandate: '',
      yearmonthposted: '',
      datecreated: '',
      usercreated: '',
      sortorderno: '',
      udf1: '',
      udf2: '',
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
        faisrefno: '',
        transactionseq: '',
        costcenter: '',
        glno: '',
        rcagl: '',
        prefix: '',
        sl: '',
        otherscode: '',
        dce: '',
        plantcode: '',
        wo: '',
        refbillno: '',
        source: '',
        nature: '',
        ayyyy: '',
        fg: '',
        debit: '',
        credit: '',
        trandate: '',
        yearmonthposted: '',
        datecreated: '',
        usercreated: '',
        sortorderno: '',
        udf1: '',
        udf2: '',
        action: '',
      });
    }
    const collectionView = new wjcCore.CollectionView(data, { pageSize });
    return collectionView;
  }

  get formControls() {
    return {
      type: this.form.get('type'),
      description: this.form.get('description'),
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
      type: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      description: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]], 
      isActive: [true, []],
    });
  }

  ngOnInit(): void {
    this.salesData = this.getSalesData(5);
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
        this._portalService.getProFormaEntry(this.id)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(
            (data: IProFormaEntry) => {
              this.salesData = new wjcCore.CollectionView(data.proFormaEntryDetailModel, { pageSize: 5 });
              new CollectionViewNavigator('#thePager', {
                byPage: true,
                headerFormat: 'Page {currentPage:n0} of {pageCount:n0}',
                cv: this.salesData
              });
            //   const selectedLibraryType = this.filteredLibraryTypes.find(type => type.name === data.acountGroup);
            //   this._portalService.getLibraryTypeOptions()
            //     .pipe(takeUntil(this._onDestroy$))
            //     .subscribe(libraryData => {
            //       if (!libraryData) {
            //         return;
            //       }
            //       const libraryOptions = libraryData;
            //       this.filteredOptions = libraryOptions.filter(type => parseInt(type.libraryTypeId) === selectedLibraryType.id);
            //       this.filteredLibraryOptions = this.filteredOptions.filter(type => type.description === data.subAcountGroup);
            //       const selectedLibraryOption = this.filteredLibraryOptions[0];
            // });

            this.form.setValue({
              type: data.type,
              description: data.description,
              isActive: data.isActive,    
            });
            this.createdBy = data.createdBy
            this.updatedBy = data.updatedBy || 'NA'
            this.updatedAt = data.updatedAt 
            this.createdAt = data.createdAt
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
    const wijmoInvalid = this.salesData.sourceCollection.some((item: any) => {
      return item.gl === '' || /^[a-zA-Z]+$/.test(item.gl) || item.sl === '' || /^[a-zA-Z]+$/.test(item.sl) || item.ledgerTitle === '';
    });
      if (wijmoInvalid) {
        this._snackBar.open('Please fill in or delete the rows in the table.', 'Close', {
          duration: 5000,
        });
        return;
      }

      const collectionView = this.salesGrid.collectionView;  
      const allItems = collectionView.sourceCollection as any[];
    
       const proFormaDetailsDTOArray: IProFormaEntryDetails[] = allItems.map((item: any) => {
        return {
          id: item.id || 0, 
          proFormaDetailsId: this.id || 0,
          faisrefno: item.faisrefno,
          transactionseq: item.transactionseq,
          costcenter: item.costcenter,
          glno: item.glno,
          rcagl: item.rcagl,
          prefix: item.prefix,
          sl: item.sl,
          otherscode: item.otherscode,
          dce: item.dce,
          plantcode: item.plantcode,
          wo: item.wo,
          refbillno: item.refbillno,
          source: item.source,
          nature: item.nature,
          ayyyy: item.ayyyy,
          fg: item.fg,
          debit: item.debit,
          credit: item.credit,
          trandate: item.trandate,
          yearmonthposted: item.yearmonthposted,
          datecreated: item.datecreated,
          usercreated: item.usercreated,
          sortorderno: item.sortorderno,
          udf1: item.udf1,
          udf2: item.udf2,
          dateRemoved: null,
          createdBy: parseInt(localStorage.getItem('user_id')),
          createdAt: this.createdAt = new Date(),
          updatedBy: parseInt(localStorage.getItem('user_id')),
          updatedAt: null
        };
      });

      const proFormaDetails: IProFormaEntry = {
        id: this.id || 0, 
        type: this.formControls.type.value,
        description: this.formControls.description.value,
        isActive: this.formControls.isActive.value ? 'Y' : 'N',
        statusDate: this.statusDate,
        createdBy: (localStorage.getItem('user_id')),
        createdAt: this.createdAt = new Date(),
        updatedBy: (localStorage.getItem('user_id')),
        updatedAt: this.updatedAt,
        proFormaEntryDetailsDTO: proFormaDetailsDTOArray,
        proFormaEntryDetailModel: [],
      };

      if (this.isEditMode) {
        this._portalService.updateProFormaEntry(this.id, proFormaDetails)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }
            if (data.errorDescription) {
              this._snackBar.open(data.errorDescription, 'Close', {
                duration: 5000,
              });
            } else {
              this._snackBar.open('Pro-Forma Entry updated successfully.', 'Close', {
                duration: 5000,
              });
            }
          });
        } else {
    
          this._portalService.addProFormaEntry(proFormaDetails)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }
            if (data.errorDescription) {
              this._snackBar.open(data.errorDescription, 'Close', {
                duration: 5000,
              });
            } else {
              this._snackBar.open('Pro-Forma Entry added successfully.', 'Close', {
                duration: 5000,
              });
              this.form.reset();
              this.salesData.sourceCollection = [];
            }
          });
        }
  }
}
