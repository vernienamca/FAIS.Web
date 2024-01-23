import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/core/models/dialog';

@Component({
  selector: 'vex-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInterface,
  // private stateService: StateService,
  private _dialogRef: MatDialogRef<DialogComponent>,
  ) {}

  handleDialogSubmit() {
    // this.stateService.isAsyncOperationRunning$.next(true);
    
    setTimeout(() => {
      this.data.callbackMethod();
      // this.stateService.isAsyncOperationRunning$.next(false);
    }, 500);
    this.closeDialog(this.data);
  }

  closeDialog(data?: any) {
    this._dialogRef.close(data);
  }
}
