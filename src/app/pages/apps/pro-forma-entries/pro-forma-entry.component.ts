import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { IProFormaEntry, IProFormaEntryDetails } from 'src/app/core/models/pro-forma-entry';
import { MatSelectChange } from '@angular/material/select';
import * as wjcCore from '@grapecity/wijmo';
import { CollectionViewNavigator } from '@grapecity/wijmo.input';
import { FlexGrid } from '@grapecity/wijmo.grid';
import { ILibraryTypeOption } from 'src/app/core/models/library-type-option';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { MatButton } from '@angular/material/button';
import { IUser } from 'src/app/core/models/user';

@Component({
  selector: 'vex-pro-forma-entry',
  templateUrl: './pro-forma-entry.component.html',
  styleUrls: ['./pro-forma-entry.component.scss']
})

export class ProFormaEntryComponent implements OnInit, OnDestroy {
  @ViewChild('proformaGrid') proformaGrid: FlexGrid;
  @ViewChild('addbutton') addbutton: MatButton;
  form: FormGroup;
  layoutCtrl = new FormBuilder().control('fullwidth');
  statusLabel = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  isEditMode: boolean = false;
  filteredLibraryOptions: ILibraryTypeOption[] =[];
  filteredOptions: ILibraryTypeOption[] =[];
  id: number;
  selectedLibraryTypeId: number;
  selectedItems: any[] = [];
  proformaData = this.getProFormaData(5);
  statusDate: Date = new Date();
  hasAccess = false;

  addNewRow(): void {
    const newItem = {
      faisRefNo: '',
      tranTypeSeq: '',
      costCenter: '',
      glNo: '',
      rcaGl: '',
      prefix: '',
      sl: '',
      otherCode: '',
      dce: '',
      plantCode: '',
      wo: '',
      refBillNo: '',
      source: '',
      nature: '',
      aYyyy: '',
      fg: '',
      debit: '',
      credit: '',
      tranDate: '',
      ymPosted: '',
      datecreated: '',
      usercreated: '',
      sort: '',
      udf1: '',
      udf2: '',
      action: '',
    };
    this.proformaGrid.collectionView.sourceCollection.unshift(newItem);
    this.proformaGrid.collectionView.refresh();
  }

  onDeleteRow(item: any): void {
      const index = this.proformaGrid.collectionView.items.indexOf(item);
        this.proformaGrid.collectionView.sourceCollection.splice(index, 1);
        this.proformaGrid.collectionView.refresh();
  }

  getProFormaData(count: number) {
    const maxRowsToShow = 5;
    const pageSize = Math.min(count, maxRowsToShow);

    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        faisRefNo: '',
        tranTypeSeq: '',
        costCenter: '',
        glNo: '',
        rcaGl: '',
        prefix: '',
        sl: '',
        otherCode: '',
        dce: '',
        plantCode: '',
        wo: '',
        refBillNo: '',
        source: '',
        nature: '',
        aYyyy: '',
        fg: '',
        debit: '',
        credit: '',
        tranDate: '',
        ymPosted: '',
        datecreated: '',
        usercreated: '',
        sort: '',
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
      tranTypeSeq: this.form.get('tranTypeSeq'),
      description: this.form.get('description'),
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
    private _securityService: SecurityService,
  ) {
    this.form = this._fb.group({
      tranTypeSeq: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isActive: [true, []],
    });
    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditProformaEntries);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if(permission.some(s => s.isUpdate) === false) {
          this.form.controls['tranTypeSeq'].disable();
          this.form.controls['description'].disable();
          this.form.controls['isActive'].disable();
          this.addbutton.disabled = true;
          this.proformaGrid.isDisabled = true;
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });
  }

  ngOnInit(): void {
    this.proformaData = this.getProFormaData(0);
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.isEditMode = true;
      this.form.get('accountgroup')?.disable();
      if (this.isEditMode) {
        this._portalService.getProFormaEntry(this.id)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe((data: IProFormaEntry) => {
              this.proformaData = new wjcCore.CollectionView(data.proformaEntryDetails, { pageSize: 5 });
              new CollectionViewNavigator('#thePager', {
                byPage: true,
                headerFormat: 'Page {currentPage:n0} of {pageCount:n0}',
                cv: this.proformaData
              });

            this._getUser(data.createdBy).subscribe(data => { 
              if (!data) {
                return;
              }
              this.createdBy = `${data.firstName} ${data.lastName}`;
            });
            this._getUser(data.updatedBy).subscribe(data => {
              if (!data) {
                return;
              }
              this.updatedBy = `${data.firstName} ${data.lastName}`;
            });

            this.form.setValue({
              tranTypeSeq: data.tranTypeSeq,
              description: data.description,
              isActive: data.isActive === 'Y' ? true : false,
            });
            this.updatedAt = data.updatedAt;
            this.createdAt = data.createdAt;
          });
      }
    }
    else {
      new CollectionViewNavigator('#thePager', {
        byPage: true,
        headerFormat: 'Page {currentPage:n0} of {pageCount:n0}',
        cv: this.proformaData
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
    const wijmoInvalid = this.proformaData.sourceCollection.some((item: any) => {
      return item.gl === '' || /^[a-zA-Z]+$/.test(item.glNo) || item.sl === '' || /^[a-zA-Z]+$/.test(item.sl) || item.faisRefNo === '';
    });
      if (wijmoInvalid) {
        this._snackBar.open('Please fill in or delete the rows in the table.', 'Close', {
          duration: 5000,
        });
        return;
      }
      const collectionView = this.proformaGrid.collectionView;
      const allItems = collectionView.sourceCollection as any[];
      const proFormaDetailsDTOArray: IProFormaEntryDetails[] = allItems.map((item: any) => {
        return {
          id: item.id || 0,
          proFormaDetailsId: this.id || 0,
          faisRefNo: item.faisRefNo,
          tranTypeSeq: item.tranTypeSeq,
          costCenter: item.costCenter,
          glNo: item.glNo,
          rcaGl: item.rcaGl,
          prefix: item.prefix,
          sl: item.sl,
          otherCode: item.otherCode,
          dce: item.dce,
          plantCode: item.plantCode,
          wo: item.wo,
          refBillNo: item.refBillNo,
          source: item.source,
          nature: item.nature,
          aYyyy: item.aYyyy,
          fg: item.fg,
          debit: item.debit,
          credit: item.credit,
          tranDate: item.tranDate,
          ymPosted: item.ymPosted,
          datecreated: item.datecreated,
          usercreated: item.usercreated,
          sort: item.sort,
          udf1: item.udf1,
          udf2: item.udf2,
          dateRemoved: null,
          createdBy: parseInt(localStorage.getItem('user_id')),
          createdAt: this.createdAt = new Date(),
          updatedBy: parseInt(localStorage.getItem('user_id')),
          updatedAt: null,
          proformaEntryId: this.id || 0
        };
      });

      const proFormaDetails: IProFormaEntry = {
        id: this.id || 0,
        tranTypeSeq: this.formControls.tranTypeSeq.value,
        description: this.formControls.description.value,
        isActive: this.formControls.isActive.value ? 'Y' : 'N',
        statusDate: this.statusDate,
        createdBy: parseInt(localStorage.getItem('user_id')),
        createdAt: this.createdAt = new Date(),
        updatedBy: parseInt(localStorage.getItem('user_id')),
        updatedAt: this.updatedAt,
        proFormaEntryDetailsDTO: proFormaDetailsDTOArray,
        proFormaEntryDetailModel: [],
        proformaEntryDetails: []
      };

      if (this.isEditMode) {
        this._portalService.updateProFormaEntry(this.id, proFormaDetails)
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
            if (!data) {
              return;
            }
            let snackBarRef = this._snackBar.open('Pro-forma has been successfully updated.', 'Close');
            snackBarRef.afterDismissed().subscribe(() => {
              window.location.reload();
            });
          });
        } else {
          this._portalService.addProFormaEntry(proFormaDetails)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
              if (!data) {
                return;
              }
              let snackBarRef = this._snackBar.open('Pro-forma has been successfully saved.', 'Close');
              snackBarRef.afterDismissed().subscribe(() => {
                this._router.navigate([`apps/pro-forma-entries/edit/${data.id}`]);
              }); 
            });
        }
  }

  private _getUser(userId: number): Observable<IUser> {
    return this._portalService.getUser(userId)
      .pipe(
        map((user) => user),
        takeUntil(this._onDestroy$)
      );
  }
}
