import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Observable, of, ReplaySubject, Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { TableColumn } from "../../../../../../@vex/interfaces/table-column.interface";
import { SelectionModel } from "@angular/cdk/collections";
import { fadeInUp400ms } from "../../../../../../@vex/animations/fade-in-up.animation";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from "@angular/material/form-field";
import { stagger40ms } from "../../../../../../@vex/animations/stagger.animation";
import { UntypedFormControl } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { MatSelectChange } from "@angular/material/select";
import { PortalService } from "src/app/core/services/portal.service";
import { IStringInterpolation } from "src/app/core/models/string-interpolation";
import { Router } from "@angular/router";

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
export class StringInterpolationListComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IStringInterpolation>[] = [
    {
      label: "Code",
      property: "transactionCode",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "Description",
      property: "description",
      type: "text",
      visible: true,
    },
    { label: "Actions", property: "actions", type: "button", visible: true },
  ];

  layoutCtrl = new UntypedFormControl("fullWidth");
  subject$: ReplaySubject<IStringInterpolation[]> = new ReplaySubject<
    IStringInterpolation[]
  >(1);
  data$: Observable<IStringInterpolation[]> = this.subject$.asObservable();
  interpolations: IStringInterpolation[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IStringInterpolation> | null;
  selection = new SelectionModel<IStringInterpolation>(true, []);
  searchCtrl = new UntypedFormControl();

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
    private _router: Router
  ) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit() {
    this._portalService.getStringInterpolation()
      .pipe(takeUntil(this._onDestroy$))
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
        console.log(interpolations);
        this.totalCount = interpolations.length;
        this.interpolations = interpolations;
        this.dataSource.data = interpolations;
      });

    this.searchCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.onFilterChange(value));
  }
  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
  ngAfterViewInit() : void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  onFilterChange(value: string) : void{
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
  isAllSelected() : boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() : void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  trackByProperty<T>(index: number, column: TableColumn<T>) : string {
    return column.property;
  }
  onLabelChange(change: MatSelectChange, row: IStringInterpolation) : void{
    const index = this.interpolations.findIndex((c) => c === row);
    this.subject$.next(this.interpolations);
  }
  createStringInterpolation() : void{
    this._router.navigate(["apps/string-interpolation-add"]);
  }
}
