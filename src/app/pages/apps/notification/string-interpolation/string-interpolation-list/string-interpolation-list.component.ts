import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Observable, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil, finalize } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { TableColumn } from "../../../../../../@vex/interfaces/table-column.interface";
import { SelectionModel } from "@angular/cdk/collections";
import { fadeInUp400ms } from "../../../../../../@vex/animations/fade-in-up.animation";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from "@angular/material/form-field";
import { stagger40ms } from "../../../../../../@vex/animations/stagger.animation";
import { UntypedFormControl } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { PortalService } from "src/app/core/services/portal.service";
import { IStringInterpolation } from "src/app/core/models/string-interpolation";
import { Router } from "@angular/router";
import { SecurityService } from "src/app/core/services/security.service";
import { MatDialog } from '@angular/material/dialog';
import { StringInterpolationConfirmationDialogComponent } from '../string-interpolation-confirmation-dialog/string-interpolation-confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@UntilDestroy()
@Component({
  selector: "vex-aio-table",
  templateUrl: "./string-interpolation-list.component.html",
  styleUrls: ["./string-interpolation-list.component.scss"],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "fill",
      } as MatFormFieldDefaultOptions,
    },
  ],
})
export class StringInterpolationListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IStringInterpolation>[] = [
    { label: "Code", property: "transactionCode", type: "text", visible: true, cssClasses: ["font-medium"] },
    { label: "Description", property: "description", type: "text", visible: true },
    { label: "Actions", property: "actions", type: "button", visible: true }
  ];

  layoutCtrl = new UntypedFormControl("fullwidth");
  subject$: ReplaySubject<IStringInterpolation[]> = new ReplaySubject<IStringInterpolation[]>(1);
  data$: Observable<IStringInterpolation[]> = this.subject$.asObservable();
  interpolations: IStringInterpolation[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IStringInterpolation> | null;
  selection = new SelectionModel<IStringInterpolation>(true, []);
  searchCtrl = new UntypedFormControl();
  isListLoading = true;
  hasCreateAccess = false;
  hasUpdateAccess = false;

  get visibleColumns() {
    return this.columns.filter((column) => column.visible).map((column) => column.property);
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _portalService: PortalService,
    private _router: Router,
    private _securityService: SecurityService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    const userId = parseInt(localStorage.getItem('user_id'));
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const listPermission = data.filter(a => a.moduleId === 7);
        const rolePermission = data.filter(a => a.moduleId === 22);
        if (listPermission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        this.hasCreateAccess = rolePermission.some(s => s.isCreate);
        this.hasUpdateAccess = rolePermission.some(s => s.isUpdate);
      });
  }

  ngOnInit(): void {
    this._portalService.getStringInterpolations()
      .pipe(
        takeUntil(this._onDestroy$),
        finalize(() => this.isListLoading = false)
      )
      .subscribe((data) => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IStringInterpolation[]>(Boolean))
      .subscribe((interpolations) => {
        this.totalCount = interpolations.length;
        this.interpolations = interpolations;
        this.dataSource.data = interpolations;
      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
      ).subscribe((value) => this.onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit() : void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  edit(interpolation: any): void {
    console.log(interpolation);
    this._router.navigate([`apps/interpolations/edit/${interpolation.id}`]);
  }

  delete(interpolation: any): void {
    console.log(interpolation);
    this._dialog.open(StringInterpolationConfirmationDialogComponent,{
      width: '500px',
      disableClose: true
      })
      .afterClosed().subscribe((result: boolean) => {
       if(result)
        if(interpolation.id != null)
          this._deleteStringInterpolation(interpolation.id);
          this._snackBar.open('User successfully deleted interpolation.', 'Close');
          window.location.reload();
      })
  }

  onFilterChange(value: string) : void {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected(): boolean {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) : string {
    return column.property;
  }

  createStringInterpolation(): void{
    this._router.navigate(["apps/interpolations/add"]);
  }

  private _deleteStringInterpolation(id): void{
    this._portalService.deleteInterpolation(id, null)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
      }
    })
  }
}
