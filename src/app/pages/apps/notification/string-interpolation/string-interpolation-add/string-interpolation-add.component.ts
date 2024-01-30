import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { PortalService } from "src/app/core/services/portal.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UntypedFormControl } from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: "vex-string-interpolation-add",
  templateUrl: "./string-interpolation-add.component.html",
  styleUrls: ["./string-interpolation-add.component.scss"],
})
export class StringInterpolationAddComponent {
  stringInterpolationForm: FormGroup;
  isToggled: boolean = false;
  notificationType: string[] = ["Banner", "Standard"];
  status: string[] = ["Active", "Inactive"];
  searchCtrl: FormControl = new FormControl();
  currentDate: string;

  layoutCtrl = new UntypedFormControl("fullwidth");

  getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
  constructor(
    private _fb: FormBuilder,
    private _portalService: PortalService,
    private _snackbar: MatSnackBar,
    private _datePipe: DatePipe
  ) {
    this.currentDate = `${this._datePipe.transform(new Date(), 'fullDate')} ${this._datePipe.transform(new Date(), 'shortTime')}`;
  
    this.stringInterpolationForm = this._fb.group({
      transactionCode: ['', [Validators.required]],
      transactionDescription: ['', [Validators.required]],
      notificationType: ['', []],
      isActive:[true,[]],
      statusDate: this.currentDate,
    });

  }

 

  save(): void {

    // this.stringInterpolationForm.setValue({

    // });

    console.log("form value", this.stringInterpolationForm.value);

    // this._portalService.addStringInterpolation(this.stringInterpolationForm.value).subscribe({
    //   next: (data) => {
    //     console.log("String Interpolation updated successfully:", data);
    //     this._snackbar.open("String Interpolation updated successfully.", "Close", {
    //       duration: 5000,
    //     });
    //   },
    //   error: (error) => {
    //     console.error("Error updating string interpolation:", error);
    //     this._snackbar.open("Error updating string interpolation.", "Close", {
    //       duration: 5000,
    //     });
    //   },
    // });
  }
}
