import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { IModule } from 'src/app/core/models/module';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PortalService } from 'src/app/core/services/portal.service';

@Component({
  selector: 'vex-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class ModuleComponent {
  
  moduleField: FormGroup;
  subject$: ReplaySubject<IModule[]> = new ReplaySubject<IModule[]>(1);
  data$: Observable<IModule[]> = this.subject$.asObservable();
  moduleName:string;
  moduleDescription:string;
  url:string;
  isActive:boolean;
  createdBy:string;
  createdAt:Date;
  modifiedBy:string;
  dateModified:Date;

  private _moduleId = '';
  private _onDestroy$ = new Subject<void>();
 
  constructor(private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
  ) {
    this.moduleField = this._fb.group({
      moduleName: ['', Validators.required],
      moduleDesc: ['', Validators.required],
      url: [''],
      isActive:  [Boolean]
  });
  }

  ngOnInit(){
    this._moduleId = this._route.snapshot.paramMap.get('id');

    this._portalService.getModules()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      
      data.forEach(module =>{
        if (module.id === Number(this._moduleId)) {          
          this.moduleName = module.name;
          this.moduleDescription = module.description;
          this.url = module.url;
          this.createdBy = module.createdBy;
          this.createdAt = module.createdAt;
          this.modifiedBy = module.updatedBy;
          this.dateModified = module.updatedAt;
          this.isActive = module.isActive;
        }
      });
      this.subject$.next(data);
    });
  }

  onSubmit() : void{
    console.log(this.moduleField.value);
  }

  close(): void{
    this._router.navigateByUrl('apps/modules');
  }
}
