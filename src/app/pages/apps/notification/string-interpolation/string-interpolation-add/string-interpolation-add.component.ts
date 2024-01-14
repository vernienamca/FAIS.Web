import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { PortalService } from "src/app/core/services/portal.service";
import { NotificationService } from "src/app/core/services/notification.service";
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: "vex-string-interpolation-add",
  templateUrl: "./string-interpolation-add.component.html",
  styleUrls: ["./string-interpolation-add.component.scss"],
})
export class StringInterpolationAddComponent {
  isToggled: boolean = false;
  notificationType: string[] = ["Banner", "Standard"];
  status: string[] = ["Active", "Inactive"];
  searchCtrl: FormControl = new FormControl();


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
    private _notificationService: NotificationService,
    private _snackbar: MatSnackBar
  ) {}

  stringInterpolationForm = this._fb.group({
    transactionCode: "",
    transactionDescription: "",
    notificationType: "",
    isActive: "",
    statusDate: "",
  });

  save(): void {
    console.log("form value", this.stringInterpolationForm.value);

    this._notificationService.addStringInterpolation(this.stringInterpolationForm.value).subscribe({
      next: (data) => {
        console.log("String Interpolation updated successfully:", data);
        this._snackbar.open("String Interpolation updated successfully.", "Close", {
          duration: 5000,
        });
      },
      error: (error) => {
        console.error("Error updating string interpolation:", error);
        this._snackbar.open("Error updating string interpolation.", "Close", {
          duration: 5000,
        });
      },
    });
  }
}
