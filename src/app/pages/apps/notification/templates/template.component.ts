import { Component, OnDestroy, OnInit } from "@angular/core";
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
  pageMode: PageMode;
  id: number;

  targetList: any[] = [
    { text: "Role", icon: "" },
    { text: "User", icon: "" },
  ];
  rolesList: any[] = [];
  usersList: any[] = [];
  typeList: any[] = [
    { text: "Banner", icon: "", value: 8 },
    { text: "Standard", icon: "", value: 9 },
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
      notificationType: this.form.get("notificationType"),
      iconColor: this.form.get("iconColor"),
      icon: this.form.get("icon"),
      isActive: this.form.get("isActive"),
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
      notificationType: [0, [Validators.required]],
      iconColor: ["", [Validators.required]],
      icon: ["", [Validators.required]],
      //status: [true, []],
      isActive: [true, []]
    });

    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    // const id = parseInt(this._route.snapshot.paramMap.get('id'));
    this.pageMode = this._route.snapshot.data.pageMode;

    this.pageLabel =  this.pageMode == 1 ? 'Add Alerts' : 'Edit Alerts';

    this._getRoles();
    this._getUsers();

    const id = parseInt(this._route.snapshot.paramMap.get("id"));
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
      // const id = parseInt(this._route.snapshot.paramMap.get('id'));
      this.pageMode = this._route.snapshot.data.pageMode;
  
      this.pageLabel =  this.pageMode == 1 ? 'Add Alert' : 'Edit Alert';
  
      if (this.pageMode === 2) {
        if (this.id) {
          this._portalService.getAlert(this.id)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe(data => {
              if (!data) {
                return;
              }
              console.log("getalert", data);
              this._initializeData(data);
            });
          return;
        }
    }
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
    if (!this.formControls.isActive.value) {
      this.formControls.isActive.markAsTouched();
      this.formControls.isActive.updateValueAndValidity();
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
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      content: data.content,
      target: data.target == 'Role' ? 'Role' : 'User',
      roles: data.roles,
      users: data.users,
      notificationType: data.notificationType,
      iconColor: data.iconColor,
      icon: data.icon,
      isActive: data.isActive === 'Y',
    });
    this.createdBy = data.createdBy;
    this.createdAt = data.createdAt;
    this.updatedBy = data.updatedBy || 'N/A';
    this.updatedAt = data.updatedAt;
  }
}