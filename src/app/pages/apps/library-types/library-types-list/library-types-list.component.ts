import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { SelectionModel } from '@angular/cdk/collections';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PortalService } from 'src/app/core/services/portal.service';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'vex-library-types-list',
  templateUrl: './library-types-list.component.html',
  styleUrls: ['./library-types-list.component.scss'],
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
export class LibraryTypesListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<ILibraryTypes>[] = [
    { label: 'No.', property: 'no', type: 'text', visible: true },
    { label: 'Library Type', property: 'name', type: 'text', visible: true },
    { label: 'Code', property: 'code', type: 'text', visible: true },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Status', property: 'isActive', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<ILibraryTypes[]> = new ReplaySubject<ILibraryTypes[]>(1);
  data$: Observable<ILibraryTypes[]> = this.subject$.asObservable();
  totalCount: number = 0;
  searchCtrl = new UntypedFormControl();
  isListLoading = true;  
  dataSource: MatTableDataSource<ILibraryTypes> | null;
  selection = new SelectionModel<ILibraryTypes>(true, []);
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  private _onDestroy$ = new Subject<void>();

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(
    private _router: Router,
    private _portalService: PortalService,
  ) {
  }
  ngOnInit(): void {
    this._portalService.getLibraryTypes()
    .pipe(
      takeUntil(this._onDestroy$),
      finalize(() => this.isListLoading = false))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.subject$.next(data);
    });

    this.isListLoading = false

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<ILibraryTypes[]>(Boolean))
      .subscribe(librarytypes => {
        this.totalCount = librarytypes.length;
        this.dataSource.data = librarytypes;
      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onFilterChange(value: string): void {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  add(): void {
    this._router.navigate(['apps/library-types/add']);
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  edit(libraryType: any): void {
    this._router.navigate([`apps/library-types/edit/${libraryType.id}`]);
  }

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

}
