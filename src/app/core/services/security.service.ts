
import { securityApi } from '../api/security-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPermission } from '../models/permission';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  navigationItems$ = new BehaviorSubject<NavigationItem[]>([]);
  
  constructor(private _securityApi: securityApi) { }

  getPermissions(userId: number): Observable<IPermission[]> {
    return this._securityApi.getPermissions(userId);
  }

  sendEmail(to: string): Observable<any> {
    return this._securityApi.sendEmail(to);
  }

  resetPassword(newPassword: string, tempKey: string): Observable<any> {
    return this._securityApi.resetPassword(newPassword,tempKey);
  }
}

