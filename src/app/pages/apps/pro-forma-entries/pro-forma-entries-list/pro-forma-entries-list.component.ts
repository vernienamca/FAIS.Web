import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
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
import { IProFormaEntry } from 'src/app/core/models/pro-forma-entry';
import { ProFormaEntryStatusEnum } from 'src/app/core/enums/pro-forma-entry-status.enum';
import { Router } from '@angular/router';
import { DialogComponent } from '../../dialog/dialog.component';

@UntilDestroy()
@Component({
  selector: 'vex-pro-forma-entries-table',
  templateUrl: './pro-forma-entries-list.component.html',
  styleUrls: ['./pro-forma-entries-list.component.scss'],
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
export class ProFormaEntriesListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Input()
  columns: TableColumn<IProFormaEntry>[] = [
    { label: 'Transaction ID', property: 'id', type: 'text', visible: true },
    { label: 'Transaction Type', property: 'tranTypeSeq', type: 'text', visible: true },
    { label: 'Transaction Description', property: 'description', type: 'text', visible: true },
    { label: 'Status', property: 'isActive', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  layoutCtrl = new UntypedFormControl('fullwidth');
  subject$: ReplaySubject<IProFormaEntry[]> = new ReplaySubject<IProFormaEntry[]>(1);
  data$: Observable<IProFormaEntry[]> = this.subject$.asObservable();
  proformaentries: IProFormaEntry[];
  totalCount: number = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<IProFormaEntry> | null;
  selection = new SelectionModel<IProFormaEntry>(true, []);
  searchCtrl = new UntypedFormControl();
  labels = aioTableLabels;      
  isListLoading = true;  

  proFormaEntryStatusEnum = ProFormaEntryStatusEnum;

  public filteredUsers: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  private _onDestroy$ = new Subject<void>();

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(
    private _dialog: MatDialog,
    private _portalService: PortalService,
    private _router: Router,
   private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this._portalService.getProFormaEntries()
      .pipe(
        takeUntil(this._onDestroy$),
        finalize(() => this.isListLoading = false)
      )
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.subject$.next(data);
      });
    this.isListLoading = false

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IProFormaEntry[]>(Boolean))
      .subscribe(proformaentries => {
        this.totalCount = proformaentries.length;
        this.proformaentries = proformaentries;
        this.dataSource.data = proformaentries;
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

  onLabelChange(change: MatSelectChange, row: IProFormaEntry): void {
    const index = this.proformaentries.findIndex(c => c === row);
    this.subject$.next(this.proformaentries);
  }
  exportProFormaEntries(): void {
    this._portalService.exportProFormaEntries();
  }

  add() {
    this._router.navigate(['apps/pro-forma-entries/add']);
  }
  
  edit(proFormaEntry: any): void {
    this._router.navigate([`apps/pro-forma-entries/edit/${proFormaEntry.id}`]);
  }

  delete(proFormaEntry: any): void {


    const dialogRef = this._dialog.open(DialogComponent, {
      data: {
        cancelButtonLabel: "Cancel",
        confirmButtonLabel: "Continue delete pro-forma entry",
        dialogHeader: "Delete pro-forma entry",
        dialogContent: "Are you sure you would like to delete this pro-forma entry?",
        callbackMethod: function() {
         
        }
      },
      width: '700px'
    });

    
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        this._portalService.deleteProFormaEntry(proFormaEntry.id)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(libraryData => {
          if (!libraryData) {
            return;
          }
        
        });
      }
    });
  }
}
