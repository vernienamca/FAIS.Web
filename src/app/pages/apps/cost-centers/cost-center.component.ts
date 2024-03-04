import { Component, OnDestroy, OnInit } from "@angular/core";
import {
    FormGroup,
    Validators,
    FormBuilder,
    UntypedFormControl,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { PortalService } from "src/app/core/services/portal.service";

@Component({
    selector: "vex-cost-center",
    templateUrl: "./cost-center.component.html",
    styleUrls: ["./cost-center.component.scss"],
})
export class CostCenterComponent implements OnInit, OnDestroy {
    form: FormGroup;
    layoutCtrl = new UntypedFormControl("fullwidth");
    statusLabel = "Active";
    createdBy: string;
    createdAt: Date;
    updatedBy: string;
    updatedAt: Date;

    get formControls() {
        return {
            fgCode: this.form.get("fgCode"),
            number: this.form.get("number"),
            name: this.form.get("name"),
            shortName: this.form.get("shortName"),
        };
    }

    private _onDestroy$ = new Subject<void>();

    constructor(
        private _fb: FormBuilder,
        private _route: ActivatedRoute,
        private _portalService: PortalService,
        private _snackBar: MatSnackBar
    ) {
        this.form = this._fb.group({
            fgCode: ["", [Validators.required]],
            number: ["", [Validators.required]],
            name: ["", [Validators.required]],
            shortName: ["", [Validators.required]],
        });

        const id = parseInt(this._route.snapshot.paramMap.get("id"));
        if (id) {
            this._portalService
                .getCostCenter(id)
                .pipe(takeUntil(this._onDestroy$))
                .subscribe((data) => {
                    if (!data) {
                        return;
                    }
                    this.form.setValue({
                        fgCode: data.fgCode,
                        number: data.number,
                        name: data.name,
                        shortName: data.shortName,
                    });
                    this.createdBy = data.createdBy;
                    this.createdAt = data.createdAt;
                    this.updatedBy = data.updatedBy || "N/A";
                    this.updatedAt = data.updatedAt;

                    this.form.controls["url"].disable();
                });
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
        const data = Object.assign({}, this.form.value);
        var id = parseInt(this._route.snapshot.paramMap.get("id"));

        if (id) {
            data.id = id;
            data.updatedBy = parseInt(localStorage.getItem("user_id"));

            this._portalService
                .updateCostCenter(data)
                .pipe(takeUntil(this._onDestroy$))
                .subscribe((data) => {
                    if (!data) {
                        return;
                    }
                    let snackBarRef = this._snackBar.open(
                        "Cost Center has been successfully updated.",
                        "Close"
                    );
                    snackBarRef.afterDismissed().subscribe(() => {
                        window.location.reload();
                    });
                });
        }
        else {
            data.createdBy = parseInt(localStorage.getItem("user_id"));

            this._portalService
                .createCostCenter(data)
                .pipe(takeUntil(this._onDestroy$))
                .subscribe((data) => {
                    if (!data) {
                        return;
                    }
                    let snackBarRef = this._snackBar.open(
                        "Cost Center has been successfully created.",
                        "Close"
                    );
                    snackBarRef.afterDismissed().subscribe(() => {
                        window.location.reload();
                    });
                });
        }
    }
}
