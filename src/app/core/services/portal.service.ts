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
import { ICostCenter } from '../models/cost-center';
import { IProFormaEntry } from '../models/pro-forma-entry';

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

  getModule(id: number): Observable<IModule> {
    return this._portalApi.getModule(id);
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

  getStringInterpolations(): Observable<IStringInterpolation[]> {
    return this._portalApi.getStringInterpolations();
  }

  getStringInterpolation(id: number): Observable<IStringInterpolation> {
    return this._portalApi.getStringInterpolation(id);
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


  getSetting(id: number): Observable<any> {
    return this._portalApi.getSetting(id);
  }

  updateModule(data: any): Observable<any> {
    return this._portalApi.updateModule(data);
  }

  updatesettings(data: any): Observable<any> {
    return this._portalApi.updatesettings(data);
  }

  updateStringInterpolation(data: any): Observable<any> {
    return this._portalApi.updateStringInterpolation(data);
  }

  getAppVersions(): Observable<any[]> {
    return this._portalApi.getAppVersions();
  }

  addVersion(data: any): Observable<any> {
    return this._portalApi.addVersion(data);
  }

  getCostCenters(): Observable<ICostCenter[]> {
    return this._portalApi.getCostCenters();
  }
  getProFormaEntries(): Observable<IProFormaEntry[]> {
    return this._portalApi.getProFormaEntries();
  }
  getProFormaEntry(id: number): Observable<IProFormaEntry> {
    return this._portalApi.getProFormaEntry(id);
  }
  updateProFormaEntry(data: any): Observable<any> {
    return this._portalApi.updateProFormaEntry(data);
  }  
  exportProFormaEntries(): void {
    this._portalApi.exportProFormaEntries().subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition 
        ? contentDisposition.split(';')[1].trim().split('=')[1] 
        : 'Pro_Forma_Entries_' + this._datePipe.transform(new Date(), 'medium') + '.xlsx';

      const blob = new Blob([response.body], { type: 'application/actet-stream' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
  }
}
