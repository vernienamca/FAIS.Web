import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  UntypedFormControl,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Subject, finalize, takeUntil } from "rxjs";
import { IAlert } from "src/app/core/models/alert";
import { PortalService } from "src/app/core/services/portal.service";

@Component({
  selector: "vex-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
})
export class AlertComponent implements OnInit, OnDestroy {
  targetList: any[] = [
    { text: "Role", icon: "" },
    { text: "User", icon: "" },
  ];
  rolesList: any[] = [];
  usersList: any[] = [];
  typeList: any[] = [
    { text: "Banner", icon: "" },
    { text: "Standard", icon: "" },
  ];
  iconColorList: any[] = [
    { text: "Light Green", color: "#9FCD63" },
    { text: "Light Gray", color: "#BCC9BC" },
    { text: "Amber", color: "#212121" },
    { text: "Blue", color: "#0000FF" },
    { text: "Brown", color: "#A5652A" },
  ];
  iconList: any[] = [
    { text: "Release Note", icon: "insert_drive_file" },
    { text: "Chart", icon: "bar_chart" },
    { text: "Broken", icon: "broken_image" },
    { text: "Call", icon: "call" },
    { text: "Announcement", icon: "announcement" },
  ];
  form: FormGroup;
  layoutCtrl = new UntypedFormControl("fullwidth");
  statusLabel = "Active";
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;

  public Editor = ClassicEditor;

  get formControls() {
    return {
      subject: this.form.get("subject"),
      startDate: this.form.get("startDate"),
      startTime: this.form.get("startTime"),
      endDate: this.form.get("endDate"),
      endTime: this.form.get("endTime"),
      content: this.form.get("content"),
      target: this.form.get("target"),
      roles: this.form.get("roles"),
      users: this.form.get("users"),
      type: this.form.get("type"),
      iconColor: this.form.get("iconColor"),
      icon: this.form.get("icon"),
      status: this.form.get("status"),
    };
  }

  private _onDestroy$ = new Subject<void>();
  editing = {};
  // rows = [];

  isRoleListLoading: boolean = false;
  isUserListLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this._fb.group({
      subject: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
      content: ["", [Validators.required]],
      target: ["", [Validators.required]],
      roles: ["", []],
      users: ["", []],
      type: ["", [Validators.required]],
      iconColor: ["", [Validators.required]],
      icon: ["", [Validators.required]],
      status: ["", [Validators.required]],
      // ,isActive: [true, []]
    });

    this.isRoleListLoading = true;
    this._portalService
      .getRoles()
      .pipe(
        takeUntil(this._onDestroy$),
        finalize(() => (this.isRoleListLoading = false))
      )
      .subscribe((data) => {
        if (!data) {
          return;
        }
        this.rolesList = data;
      });

    this.isUserListLoading = true;
    this._portalService
      .getUsers()
      .pipe(
        takeUntil(this._onDestroy$),
        finalize(() => (this.isUserListLoading = false))
      )
      .subscribe((data) => {
        if (!data) {
          return;
        }
        console.log("data");
        console.log(data);
        this.usersList = data;
      });

    const id = parseInt(this._route.snapshot.paramMap.get("id"));
    this._portalService
      .getAlert(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((data) => {
        if (!data) {
          return;
        }
        this.form.setValue({
          subject: data.subject,
          startDate: data.startDate,
          startTime: data.startTime,
          endDate: data.endDate,
          endTime: data.endTime,
          content: data.content,
          target: data.target,
          roles: data.roles,
          users: data.users,
          type: data.type,
          iconColor: data.iconColor,
          icon: data.icon,
          status: data.status,
          // ,isActive: data.isActive === 'Y'
        });
        this.createdBy = data.createdBy;
        this.createdAt = data.createdAt;
        this.updatedBy = data.updatedBy || "N/A";
        this.updatedAt = data.updatedAt;

        this.form.controls["url"].disable();
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onToggleStatus($event: any): void {
    this.statusLabel = !$event.checked ? "Inactive" : "Active";
  }

  save(): void {
    console.log("save");
    var isValid = true;
    if (!this.formControls.subject.value) {
      this.formControls.subject.markAsTouched();
      this.formControls.subject.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.startDate.value) {
      this.formControls.startDate.markAsTouched();
      this.formControls.startDate.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.startTime.value) {
      this.formControls.startTime.markAsTouched();
      this.formControls.startTime.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.endDate.value) {
      this.formControls.endDate.markAsTouched();
      this.formControls.endDate.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.endTime.value) {
      this.formControls.endTime.markAsTouched();
      this.formControls.endTime.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.content.value) {
      this.formControls.content.markAsTouched();
      this.formControls.content.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.target.value) {
      this.formControls.target.markAsTouched();
      this.formControls.target.updateValueAndValidity();
      isValid = false;
    }
    // if (!this.formControls.roles.value) {
    //   this.formControls.roles.markAsTouched();
    //   this.formControls.roles.updateValueAndValidity();
    //   isValid = false;
    // }
    // if (!this.formControls.users.value) {
    //   this.formControls.users.markAsTouched();
    //   this.formControls.users.updateValueAndValidity();
    //   isValid = false;
    // }
    if (!this.formControls.type.value) {
      this.formControls.type.markAsTouched();
      this.formControls.type.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.iconColor.value) {
      this.formControls.iconColor.markAsTouched();
      this.formControls.iconColor.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.icon.value) {
      this.formControls.icon.markAsTouched();
      this.formControls.icon.updateValueAndValidity();
      isValid = false;
    }
    if (!this.formControls.status.value) {
      this.formControls.status.markAsTouched();
      this.formControls.status.updateValueAndValidity();
      isValid = false;
    }
    if (!isValid) {
      return;
    }
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get("id"));
    data.isActive = data.isActive ? "Y" : "N";
    data.updatedBy = parseInt(localStorage.getItem("user_id"));
    console.log("data");
    console.log(data);
    return;
    this._portalService
      .updateAlert(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((data) => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open(
          "Alert has been successfully updated.",
          "Close"
        );
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }
}
