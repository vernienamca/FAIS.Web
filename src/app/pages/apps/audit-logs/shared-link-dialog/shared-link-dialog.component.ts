import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-shared-link-dialog',
  templateUrl: './shared-link-dialog.component.html',
  styleUrls: ['./shared-link-dialog.component.scss']
})
export class SharedLinkDialogComponent implements OnInit {
  sharedLink: string;
  isListLoading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) { 
    this.sharedLink = this._data;
  }

  ngOnInit() {
    this.isListLoading = false;
  }
}

