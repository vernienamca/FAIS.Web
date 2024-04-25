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
import { ITemplate } from "src/app/core/models/template";
import { Router } from "@angular/router";

@UntilDestroy()
@Component({
  selector: "vex-aio-table",
  templateUrl: "./template-list.component.html",
  styleUrls: ["./template-list.component.scss"],
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
export class TemplateListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<ITemplate>[] = [
    { label: "Subject", property: "subject", type: "text", visible: true, cssClasses: ["font-medium"] },
    { label: "Receiver", property: "target", type: "text", visible: true },
    { label: "Notification Type", property: "notificationTypeName", type: "text", visible: true },
    { label: "Created By", property: "createdByName", type: "text", visible: true },
    { label: "Date Created", property: "createdAt", type: "text", visible: true },
    { label: "Status", property: "isActive", type: "text", visible: true },
    { label: "Actions", property: "actions", type: "button", visible: true },
  ];

  layoutCtrl = new UntypedFormControl("fullwidth");
  subject$: ReplaySubject<ITemplate[]> = new ReplaySubject<ITemplate[]>(1);
  data$: Observable<ITemplate[]> = this.subject$.asObservable();
  templates: ITemplate[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<ITemplate> | null;
  selection = new SelectionModel<ITemplate>(true, []);
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

  ngOnInit(): void {
    this._portalService.getAlerts()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((data) => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });

    this.dataSource = new MatTableDataSource();
    this.data$.pipe(filter<ITemplate[]>(Boolean)).subscribe((templates) => {
      this.totalCount = templates.length;
      this.templates = templates;
      this.dataSource.data = templates;
    });

    this.searchCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  edit(template: any): void {
    console.log(template);
    this._router.navigate([`apps/templates/edit/${template.id}`]);
  }

  onFilterChange(value: string): void {
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

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: ITemplate): void {
    const index = this.templates.findIndex((c) => c === row);
    this.subject$.next(this.templates);
  }

  createNotificationTemplate(): void {
    this._router.navigate(["apps/templates/add"]);
  }
}
