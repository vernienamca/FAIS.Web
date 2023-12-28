import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PortalApi } from '../api/portal-api.service';
import { IModule } from '../models/module';
import { IRole } from '../models/role';
import { IUser } from '../models/user';
import { IAuditLogs } from '../models/audit-logs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  constructor(private _portalApi: PortalApi) { }

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
}
