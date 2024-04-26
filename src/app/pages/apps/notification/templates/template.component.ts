import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
  UntypedFormControl,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Subject, finalize, takeUntil } from "rxjs";
import { PortalService } from "src/app/core/services/portal.service";
import { ITemplate } from 'src/app/core/models/template'
import { PageMode } from 'src/app/core/enums/page-mode.enum';
import { MatDialog } from '@angular/material/dialog';
import { ViewInterpolationDialogComponent } from "./view-interpolation-dialog/view-interpolation-dialog.component";
import { IStringInterpolation } from "src/app/core/models/string-interpolation";

@Component({
  selector: 'vex-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})

export class TemplateComponent implements OnInit, OnDestroy {
  pageLabel: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  todayDate: Date;
  pageMode: PageMode;
  id: number;
  @ViewChild("contentEditor", { static: true }) contentEditor: any;

  targetList: any[] = [
    { text: "Role", icon: "", value: 1 },
    { text: "User", icon: "", value: 2 },
  ];
  rolesList: any[] = [];
  usersList: any[] = [];
  typeList: any[] = [
    { text: "Banner", icon: "", value: 8 },
    { text: "Standard", icon: "", value: 9 },
  ];
  iconColorList: any[] = [
    { text: "Light Green", color: "#9FCD63", value: 'light green' },
    { text: "Light Gray", color: "#BCC9BC", value: "light gray" },
    { text: "Amber", color: "#212121", value: "amber" },
    { text: "Blue", color: "#0000FF", value: "blue" },
    { text: "Brown", color: "#A5652A", value: "Brown" },
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
  stringInterpolations: IStringInterpolation[] = [];


  public Editor = ClassicEditor;

  get formControls() {
    return {
      subject: this.form.get("subject"),
      url: this.form.get("url"),
      startDate: this.form.get("startDate"),
      startTime: this.form.get("startTime"),
      endDate: this.form.get("endDate"),
      endTime: this.form.get("endTime"),
      content: this.form.get("content"),
      target: this.form.get("target"),
      roles: this.form.get("roles"),
      users: this.form.get("users"),
      notificationType: this.form.get("notificationType"),
      iconColor: this.form.get("iconColor"),
      icon: this.form.get("icon"),
      isActive: this.form.get("isActive"),
      statusDate: this.form.get("statusDate")
    };
  }

  private _onDestroy$ = new Subject<void>();
  editing = {};
  // rows = [];

  isRoleListLoading: boolean = false;
  isUserListLoading: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
  ) {
    this.form = this._fb.group({
      subject: ["", [Validators.required]],
      url: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      endDate: ["", [Validators.required]],
      endTime: ["", [Validators.required]],
      content: ["", [Validators.required]],
      target: ["", [Validators.required]],
      roles: ["", []],
      users: ["", []],
      notificationType: [0, [Validators.required]],
      iconColor: ["", [Validators.required]],
      icon: ["", [Validators.required]],
      //status: [true, []],
      isActive: [true, []],
      statusDate: [new Date()]
    });

    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;

    this.pageLabel =  this.pageMode == 1 ? 'Add Notification Templates' : 'Edit Notification Templates';

    this._getRoles();
    this._getUsers();

      this.pageMode = this._route.snapshot.data.pageMode;
  
      this.pageLabel =  this.pageMode == 1 ? 'Add Notification Templates' : 'Edit Notification Templates';

      console.log("this.id");
      console.log(this.id);
      console.log("this.pageMode");
      console.log(this.pageMode);
  
      if (this.pageMode === 2) {
        if (this.id) {
          console.log("this.id");
          console.log(this.id);
          this._portalService.getNotificationTemplate(this.id)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
              if (!data) {
                return;
              }
              console.log("getNotificationTemplate", data);
              this._initializeData(data);
            });
          return;
        }
    }
  }

  ngOnInit(): void {
    this._getStringInterpolations();
    this.todayDate = new Date();
    console.log(this.todayDate);
  }

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
    if (!this.formControls.url.value) {
      this.formControls.url.markAsTouched();
      this.formControls.url.updateValueAndValidity();
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
    if (this.formControls.startDate.value > this.formControls.endDate.value) {
      this.formControls.endDate.markAsTouched();
      this.formControls.endDate.updateValueAndValidity();
      this.formControls.endDate.setErrors({"lessthanstartdate": true});
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
    if (!this.formControls.notificationType.value) {
      this.formControls.notificationType.markAsTouched();
      this.formControls.notificationType.updateValueAndValidity();
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
    if (!isValid) {
      return;
    }
    const data = Object.assign({}, this.form.value);
    data.id = parseInt(this._route.snapshot.paramMap.get("id"));
    data.isActive = data.isActive ? "Y" : "N";
    data.updatedBy = parseInt(localStorage.getItem("user_id"));
    console.log("data");
    console.log(data);

    data.receiver = data.target == "Role" ? 1 : 2;
    data.users = (data && data.users) ? data.users.join(",") : "";
    data.roles = (data && data.roles) ? data.roles.join(",") : "";
    
    // this._portalService
    //   .updateAlert(data)
    //   .pipe(takeUntil(this._onDestroy$))
    //   .subscribe((data) => {
    //     if (!data) {
    //       return;
    //     }
    //     let snackBarRef = this._snackBar.open(
    //       "Alert has been successfully updated.",
    //       "Close"
    //     );
    //     snackBarRef.afterDismissed().subscribe(() => {
    //       window.location.reload();
    //     });
    //   });

    if (this.pageMode === 1) {
      data.createdBy = parseInt(localStorage.getItem('user_id'));
            
      this._portalService.createAlert(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Alert has been successfully added.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigateByUrl('apps/templates');
        });
      });
    }
    else if (this.pageMode === 2) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));
      data.id = this.id;
console.log("update data", data);

      this._portalService.updateAlert(this.id, data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Alert has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
    }
    return;
  }

  private _getRoles(): void {
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

        console.log("this.rolesList");
        console.log(this.rolesList);
      });

   

  }

  private _getUsers(): void {
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
  }

  private _initializeData(data: any): void {
    console.log("test",data);
    if (data == null || data.result == null)
      return;

    data = data.result;
    this.form.setValue({
      subject: data.subject,
      url: data.url ? data.url : "",
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      content: data.content,
      target: data.target == 'Role' ? 'Role' : 'User',
      roles: data.roles ? data.roles : "",
      users: data.users ? data.users : "",
      notificationType: data.notificationType,
      iconColor: data.iconColor,
      icon: data.icon,
      isActive: data.isActive === 'Y',
      statusDate: data.statusDate
    });
    this.createdBy = data.createdBy;
    this.createdAt = data.createdAt;
    this.updatedBy = data.updatedBy || 'N/A';
    this.updatedAt = data.updatedAt;
  }

  viewInterpolation(): void {
    const dialogRef = this._dialog.open(ViewInterpolationDialogComponent, {
      data: {
        stringInterpolations: this.stringInterpolations
      },
      width: '700px'
    });

    
    dialogRef.afterClosed().subscribe(result => {
      if(result && result.data && result.data.transactionCode) {
        console.log("this.formControls.content.value");
        console.log(this.formControls.content.value);
        this.form.patchValue({content: this.formControls.content.value + " " + result.data.transactionCode});
      }
    });
  }
  private _getStringInterpolations(): void {
    this._portalService.getStringInterpolations()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        this.stringInterpolations = data;
      });
  }
}