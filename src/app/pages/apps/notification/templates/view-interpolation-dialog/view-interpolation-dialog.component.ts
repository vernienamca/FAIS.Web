import { AfterViewInit, Component, EventEmitter, Inject, OnDestroy, OnInit, Output, ViewChild } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, ReplaySubject, Subject, filter, finalize, map, takeUntil } from "rxjs";
import { fadeInUp400ms } from "src/@vex/animations/fade-in-up.animation";
import { stagger40ms } from "src/@vex/animations/stagger.animation";
import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { IRole } from "src/app/core/models/role";
import { IStringInterpolation } from "src/app/core/models/string-interpolation";
import { IUserRole } from "src/app/core/models/user";
import { PortalService } from "src/app/core/services/portal.service";

@UntilDestroy()
@Component({
  selector: 'view-interpolation-dialog',
  templateUrl: './view-interpolation-dialog.component.html',
  styleUrls: ['./view-interpolation-dialog.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class ViewInterpolationDialogComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  columns: TableColumn<IStringInterpolation>[] = [
    { label: 'Code', property: 'transactionCode', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Description', property: 'description', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  subject$: ReplaySubject<IStringInterpolation[]> = new ReplaySubject<IStringInterpolation[]>(1);
  data$: Observable<IStringInterpolation[]> = this.subject$.asObservable();
  dataSource: MatTableDataSource<IStringInterpolation> | null;
  searchCtrl = new UntypedFormControl();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  stringInterpolations: IStringInterpolation[];
  userId: number;
  // userRoleIds: number[];
  totalCount: number = 0;
  isListLoading = true;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _portalService: PortalService,
    private dialogRef: MatDialogRef<ViewInterpolationDialogComponent>
  ) {
    console.log("data");
    console.log(data);
    this.userId = parseInt(localStorage.getItem('user_id'));
    // this.userRoleIds = this.data.userRoleIds;
    this.stringInterpolations = this.data.stringInterpolations;
    this.subject$.next(this.stringInterpolations);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IStringInterpolation[]>(Boolean))
      .subscribe(data => {
        this.isListLoading = false;
        // data.filter(t => this.userRoleIds.some((x: number) => x === t.id)).forEach(item => {
        //   item.isAdded = true;
        // });
        this.totalCount = data.length;
        this.dataSource.data = [];// data;
      });

      this.searchCtrl.valueChanges.pipe(
        untilDestroyed(this)
      ).subscribe(value => this.onFilterChange(value));

      this.dataSource.data = this.stringInterpolations;
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilterChange(value: string): void {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  insertInterpolation(stringInterpolation: IStringInterpolation): void {
    console.log(stringInterpolation);
    // insert Interpolation
    this.dialogRef.close({data: stringInterpolation});
  }
}

