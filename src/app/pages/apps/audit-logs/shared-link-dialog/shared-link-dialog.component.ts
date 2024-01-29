import { Component, Inject, OnDestroy } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subject } from "rxjs";

@Component({
  selector: 'app-shared-link-dialog',
  templateUrl: './shared-link-dialog.component.html',
  styleUrls: ['./shared-link-dialog.component.scss']
})
export class SharedLinkDialogComponent implements OnDestroy {
  sharedLink: string;

  private _onDestroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.sharedLink = data.auditLogsFilePath;
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}

