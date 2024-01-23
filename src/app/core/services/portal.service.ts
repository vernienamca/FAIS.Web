import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortalApi } from '../api/portal-api.service';
import { IModule } from '../models/module';
import { IRole } from '../models/role';
import { IUser } from '../models/user';
import { IAuditLogs } from '../models/audit-logs';
import { IStringInterpolation } from '../models/string-interpolation';
import { ITemplates } from '../models/templates';
import { DatePipe } from '@angular/common';
import { ISettings } from '../models/settings';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  constructor(
    private _portalApi: PortalApi, 
    private _datePipe: DatePipe) { }

  getModules(): Observable<IModule[]> {
    return this._portalApi.getModules();
  }

  getRoles(): Observable<IRole[]> {
    return this._portalApi.getRoles();
  }

  getRoleId(id: number): Observable<IRole[]> {
    return this._portalApi.getRoleId(id);
  }

  updaterolepermission(data: any): Observable<IRole[]> {
    return this._portalApi.updaterolepermission(data);
  }

  getUsers(): Observable<IUser[]> {
    return this._portalApi.getUsers();
  }
  
  getUser(id: number): Observable<any> {
    return this._portalApi.getUser(id);
  }

  getAuditLogs(): Observable<IAuditLogs[]> {
    return this._portalApi.getAuditLogs();
  }

  getStringInterpolation(): Observable<IStringInterpolation[]> {
    return this._portalApi.getStringInterpolation();
  }

  getAlerts(): Observable<ITemplates[]> {
    return this._portalApi.getTemplates();
  }
  
  exportAuditLogs(): void {
    this._portalApi.exportAuditLogs().subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition 
        ? contentDisposition.split(';')[1].trim().split('=')[1] 
        : 'Audit_Logs_' + this._datePipe.transform(new Date(), 'medium') + '.xlsx';

      const blob = new Blob([response.body], { type: 'application/actet-stream' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
  }

  openFolder() : void {
    this._portalApi.openFolder().subscribe(
      (response) => {
      },
    )
  }

  getSettingsId(id: number): Observable<any> {
    return this._portalApi.getSettingsId(id);
  }

  updatesettings(data: any): Observable<any> {
    return this._portalApi.updatesettings(data);
  }
}
