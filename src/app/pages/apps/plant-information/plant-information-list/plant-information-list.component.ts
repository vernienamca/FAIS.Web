import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from '../../../../../@vex/interfaces/table-column.interface';
import { aioTableLabels } from '../../../../../static-data/aio-table-data';
import { SelectionModel } from '@angular/cdk/collections';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { UntypedFormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSelectChange } from '@angular/material/select';
import { PortalService } from 'src/app/core/services/portal.service';
import { IPlantInformation } from 'src/app/core/models/plant-information';
import { PlantInformationStatusEnum } from 'src/app/core/enums/plant-information-status.enum';
import { Router } from '@angular/router';
import { ILibraryTypes } from 'src/app/core/models/library-types';

@UntilDestroy()
@Component({
  selector: 'vex-plant-information-table',
  templateUrl: './plant-information-list.component.html',
  styleUrls: ['./plant-information-list.component.scss'],
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
export class PlantInformationListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IPlantInformation>[] = [
    { label: 'Plant Code', property: 'plantCode', type: 'text', visible: true },
    { label: 'Substation Name', property: 'substationName', type: 'text', visible: true },
    { label: 'Substation Name Old', property: 'substationNameOld', type: 'text', visible: true },
    { label: 'Transmission Grid', property: 'transmissionGrid', type: 'text', visible: true },
    { label: 'District Office', property: 'districtOffice', type: 'text', visible: true },
    { label: 'Google Map Coordinates', property: 'googleMapCoordinates', type: 'text', visible: true },
    { label: 'Commisioning Date', property: 'commisioningDate', type: 'text', visible: true },
    { label: 'Status', property: 'isActive', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IPlantInformation[]> = new ReplaySubject<IPlantInformation[]>(1);
  data$: Observable<IPlantInformation[]> = this.subject$.asObservable();
  librarytypeoptions: IPlantInformation[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IPlantInformation> | null;x
  selection = new SelectionModel<IPlantInformation>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;      
  isListLoading = true;  
  types: ILibraryTypes[];
  libraryTypes = [];

  plantInformationStatusEnum = PlantInformationStatusEnum;

  public filteredUsers: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  private _onDestroy$ = new Subject<void>();

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this._portalService.getPlantInformations()
    .pipe(
      takeUntil(this._onDestroy$),
      finalize(() => this.isListLoading = false))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.subject$.next(data);
    });

    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(libraryTypes => {
      if (!libraryTypes) {
        return;
      }
      this.types = libraryTypes;
      this.libraryTypes = libraryTypes.map(function(a) {return a.name;}).filter((value, index, self) => self.indexOf(value) === index);
      this.libraryTypes.push("All");      
      this.libraryTypes.sort((a, b) => {
        return (a === "All") ? -1 : (b === "All") ? 1 : b.localeCompare(a);
      });
    });

    this.isListLoading = false

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IPlantInformation[]>(Boolean))
      .subscribe(librarytypeoptions => {
        this.totalCount = librarytypeoptions.length;
        this.librarytypeoptions = librarytypeoptions;
        this.dataSource.data = librarytypeoptions;
      });

    this.searchCtrl.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngOnDestroy(): void {
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

  toggleColumnVisibility(column, event): void {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>): string {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: IPlantInformation): void {
    const index = this.librarytypeoptions.findIndex(c => c === row);
    this.subject$.next(this.librarytypeoptions);
  }
  exportPlantInformations(): void {
    this._portalService.exportPlantInformations();
  }

  add(): void {
    this._router.navigate(['apps/plant-information/add']);
  }
  
  edit(plantInformation: any): void {
    this._router.navigate([`apps/plant-information/edit/${plantInformation.plantCode}`]);
  }
  
  googleMap(plantInformation: any): void {
    console.log("show google map")
  }
}