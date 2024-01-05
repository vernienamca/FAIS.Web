import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortalApi } from '../api/portal-api.service';
import { IModule } from '../models/module';
import { IRole } from '../models/role';
import { IUser } from '../models/user';
import { IAuditLogs } from '../models/audit-logs';
import { DatePipe } from '@angular/common';

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

  getUsers(): Observable<IUser[]> {
    return this._portalApi.getUsers();
  }
  
  getUser(id: number): Observable<any> {
    return this._portalApi.getUser(id);
  }

  getAuditLogs(): Observable<IAuditLogs[]> {
    return this._portalApi.getAuditLogs();
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
}
