import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogInterface } from 'src/app/core/models/dialog';

@Component({
  selector: 'vex-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  isConfirmYes: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogInterface,
    private _dialogRef: MatDialogRef<DialogComponent>
  ) {
  }

  handleConfirmYes(): void {    
    this._dialogRef.close(true);
  }

  closeDialog(): void {
    this._dialogRef.close(false);
  }
}
