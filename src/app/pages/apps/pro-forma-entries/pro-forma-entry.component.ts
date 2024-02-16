import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Subject, takeUntil } from 'rxjs';
import { IProFormaEntry } from 'src/app/core/models/pro-forma-entry';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'vex-pro-forma-entry',
  templateUrl: './pro-forma-entry.component.html',
  styleUrls: ['./pro-forma-entry.component.scss']
})
export class ProFormaEntryComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  statusLabel = 'Active';
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  get formControls() {
    return {
      type: this.form.get('type'),
      description: this.form.get('description'),
      status: this.form.get('status')
    };
  }

  private _onDestroy$ = new Subject<void>();
  editing = {};
  // rows = [];
  rows = [
    { faisrefno: '',
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
    remove: '',
   }
  ];
  columns = [{ id: "faisrefno", name: "FAIS Ref No.", type: "text" },
            { id: "transactionseq", name: "Transaction Seq", type: "text" },
            { id: "costcenter", name: "Cost Center", type: "text" },
            { id: "glno", name: "GL No.", type: "text" },
            { id: "rcagl", name: "RCA GL", type: "text" },
            { id: "prefix", name: "Prefix", type: "text" },
            { id: "sl", name: "SL", type: "text" },
            { id: "otherscode", name: "Others Code", type: "text" },
            { id: "dce", name: "DCE", type: "text" },
            { id: "plantcode", name: "Plant Code", type: "text" },
            { id: "wo", name: "WO", type: "text" },
            { id: "refbillno", name: "Ref./Bill No.", type: "text" },
            { id: "source", name: "Source", type: "text" },
            { id: "nature", name: "Nature", type: "text" },
            { id: "ayyyy", name: "A_YYYY", type: "text" },
            { id: "fg", name: "FG", type: "text" },
            { id: "debit", name: "Debit", type: "text" },
            { id: "credit", name: "Credit", type: "text" },
            { id: "trandate", name: "Tran Date" },
            { id: "yearmonthposted", name: "Year Month Posted", type: "text" },
            { id: "datecreated", name: "Date Created", type: "text" },
            { id: "usercreated", name: "User Created", type: "text" },
            { id: "sortorderno", name: "Sort Order No.", type: "text" },
            { id: "udf1", name: "UDF 1", type: "text" },
            { id: "udf2", name: "UDF 2", type: "text" },
            { id: "remove", name: "Remove", type: "button" }];

  ColumnMode = ColumnMode;
  
  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
 
  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status: ['', [Validators.required]],
      // ,isActive: [true, []]
    });

    const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getProFormaEntry(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.form.setValue({
          type: data.type,
          description: data.description || '',
          status: data.status,
          // ,isActive: data.isActive === 'Y'
        });
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedBy || 'N/A';
        this.updatedAt = data.updatedAt;

        this.form.controls['url'].disable();
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? 'Inactive' : 'Active'; 
  }

  save(): void {
    if (!this.formControls.type.value) {
      this.formControls.type.markAsTouched();
      this.formControls.type.updateValueAndValidity();
      return;
    }
    if (!this.formControls.description.value) {
      this.formControls.description.markAsTouched();
      this.formControls.description.updateValueAndValidity();
      return;
    }
    if (!this.formControls.status.value) {
      this.formControls.status.markAsTouched();
      this.formControls.status.updateValueAndValidity();
      return;
    }
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get('id'));
    data.isActive = data.isActive ? 'Y' : 'N'; 
    data.updatedBy = parseInt(localStorage.getItem('user_id'));

  this._portalService.updateProFormaEntry(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Pro-forma entry has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }
}
