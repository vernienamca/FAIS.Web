import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PortalService } from 'src/app/core/services/portal.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { IModule } from 'src/app/core/models/module';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'vex-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit{

  displayedColumns: string[] = ['module-name', 'action'];
  dataSource: MatTableDataSource<IModule> | null;
  inputData: any;
  moduleDataRow: IModule[]=[];
  isAdded: any;
  checkModule: IModule[]=[];
  subject$: ReplaySubject<IModule[]> = new ReplaySubject<IModule[]>(1);
  data$: Observable<IModule[]> = this.subject$.asObservable();

  private _onDestroy$ = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: IModule,
  private ref: MatDialogRef<AddModuleComponent>,
  private _portalService: PortalService,
  ) {}

  ngOnInit(): void {
    this._portalService.getModules()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.subject$.next(data);
    });

    this.dataSource = new MatTableDataSource();
    this.data$
      .pipe(filter<IModule[]>(Boolean))
      .subscribe(modules => {        
        this.dataSource.data = modules;
      });

    this.inputData = this.data;
    this.inputData.modules.forEach((module)=>{
      this.checkModule = [...this.checkModule, module];
    });
  }

  closeDialog(): void{
    this.ref.close(this.moduleDataRow);
  }

  addModule(item):void{
    
    this.moduleDataRow = [...this.moduleDataRow, item];

    for (var i of this.moduleDataRow) {
      i.isAdded = true;
      this.isAdded = i;
    }
  }

  moduleExist(module):boolean{
    let moduleIsAdded = false
    this.checkModule.forEach((data)=>{
      if (data.id == module) {
        moduleIsAdded = true;
      }
    });
    return moduleIsAdded;
  }

  applyFilter(event: Event) {
    const filterModule = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterModule.trim().toLowerCase();
  }
}
