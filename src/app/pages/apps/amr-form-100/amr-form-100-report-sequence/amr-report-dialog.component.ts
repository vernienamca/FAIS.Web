import { DatePipe } from "@angular/common";
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'; 
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { parse } from "path";
import { Subject, takeUntil } from "rxjs";
import { IAmr100 } from "src/app/core/models/amr-100";
import { PortalService } from "src/app/core/services/portal.service";

@Component({
  selector: 'app-amr-report-dialog',
  templateUrl: './amr-report-dialog.component.html',
  styleUrls: ['./amr-report-dialog.component.scss']
})
export class AmrReportDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;
  id: number;
  isEditMode = this.data.isEditMode
  isViewMode = this.data.isViewMode
  isSaving: boolean = false;
  createdBy: any;
  yearMonth = this._datePipe.transform(new Date(), 'yyyy-MM');

  get formControls() {
    return {
      reportseq: this.form.get('id'),
      yearmonth: this.form.get('amrYm'),
      receivedtransco: this.form.get('dateReceivedTransco'),
      receivedarmpmd: this.form.get('dateReceivedArmPmd'),
      encoding: this.form.get('dateSentEncoding'),
      binders: this.form.get('noOfBinders'),
      udf1: this.form.get('udF1'), 
      udf2: this.form.get('udF2'),
      udf3: this.form.get('udF3')
    };
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private _fb: FormBuilder,
    private _router: Router,
    private _portalService: PortalService,
    private _datePipe: DatePipe,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      id: [{ value: '', disabled: true }], 
      amrYm: [{value: this.yearMonth, disabled: true}],
      dateReceivedTransco: ['', [Validators.required]],
      dateReceivedArmPmd: ['', [Validators.required]],
      dateSentEncoding: [{ value: '', disabled: true}],
      noOfBinders: ['', [Validators.required]],
      udF1: [''], 
      udF2: [''],
      udF3: [''] 
    });
  }

  ngOnInit(): void {
    if (this.isViewMode) {
      this.id = this.data.id
      this.getAssetMovementReport(this.id); 
      this.disableFormControls();
    }

    if (this.isEditMode) {
      this.id = this.data.id
      this.getAssetMovementReport(this.id); 
    }
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  save(): void{
    const data = Object.assign({}, this.form.value);
    this.isSaving = true;
    console.log('data', data)
    data.amrYm = this.form.get('amrYm').value;

    if (this.isEditMode)
      {
      data.updatedBy = parseInt(localStorage.getItem('user_id'))
      data.id = this.formControls.reportseq.value;
      this._updateAssetMovementReport(this.data.id , data)
      }
    else {
      data.createdBy = parseInt(localStorage.getItem('user_id'));
      this._createAssetMovementReport(data);
    }
  }
  
  private disableFormControls(): void {
    const controls = this.formControls;
    Object.keys(controls).forEach(key => {
      const control = controls[key];
      control.disable();
    });
  }
  
  private getAssetMovementReport(id: number): void {
    this._portalService.getAssetMovementReport(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        const result = data.result;
        let amrYm = this._datePipe.transform(result.amrYm,'yyyy-MM')
        let DateReceivedTransco = this._datePipe.transform(result.dateReceivedTransco, 'd-MMMM-yyyy');
        let DateReceivedArmPmd = this._datePipe.transform(result.dateReceivedArmPmd, 'd-MMMM-yyyy');
        let encoding = this._datePipe.transform(result.dateSentEncoding, 'd-MMMM-yyyy');

        if (this.isEditMode) {
          DateReceivedTransco = this._datePipe.transform(result.dateReceivedTransco, 'yyyy-MM-dd');
          DateReceivedArmPmd = this._datePipe.transform(result.dateReceivedArmPmd, 'yyyy-MM-dd');
          encoding = this._datePipe.transform(result.dateSentEncoding, 'yyyy-MM-dd');
        }

        console.log('received data', data);
        this.form.setValue({
          id: result.id,
          amrYm: amrYm,
          dateReceivedTransco: DateReceivedTransco,
          dateReceivedArmPmd: DateReceivedArmPmd,
          dateSentEncoding: encoding,
          noOfBinders: result.noOfBinders,
          udF1: result.udF1,
          udF2: result.udF2,
          udF3: result.udF3,
        });
      });
  }

    private _createAssetMovementReport(data: IAmr100): void{
      this._portalService.createAssetMovementReport(data)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if(!data) {
            return;
          }
          // can insert the email part here... 
        })
        let snackBarRef = this._snackBar.open('Asset movement report has been successfully saved.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        })
    };
        
    private _updateAssetMovementReport(id: number, data: any): void {
      this._portalService.updateAssetMovementReport(id, data)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if(!data) {
            return;
          }
        })
        let snackBarRef = this._snackBar.open('Asset movement report has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        })
    }
  }