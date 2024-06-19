import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { PortalService } from "src/app/core/services/portal.service";

@Component({
  selector: 'app-amr-report-dialog',
  templateUrl: './amr-report-dialog.component.html',
  styleUrls: ['./amr-report-dialog.component.scss']
})
export class AmrReportDialogComponent implements OnInit, OnDestroy {

  form: FormGroup;
  id: number;
  isEditMode: boolean = false;

  private _onDestroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _portalService: PortalService
  ) {
    this.form = this._fb.group({
      reportseq: [''], 
      yearmonth: [''],
      receivedtransco: [''],
      receivedarmpmd: [''],
      encoding: [''],
      binders: [''],
      udf1: [''], 
      udf2: [''],
      udf3: [''] 
    });
  }
  ngOnInit(): void {
    this.id = this.data.id
    console.log('this.id', this.id)
    if (this.id){
      this.isEditMode = true;
      this.getAssetMovementReport(this.id); 
  
    }
      
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }


  getFormControl(name: string) {
    return this.form.get(name);
  }

  
  private getAssetMovementReport (id: number): void{
    this._portalService.getAssetMovementReport(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        console.log('data',data )
        this.form.setValue({
          reportseq: data.id
          
        })
      })
  }
}
