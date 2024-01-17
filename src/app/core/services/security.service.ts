
import { securityApi } from '../api/security-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPermission } from '../models/permission';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  navigationItems$ = new BehaviorSubject<NavigationItem[]>([]);
  
  constructor(private _securityApi: securityApi) { }

  getPermissions(userId: number): Observable<IPermission[]> {
    return this._securityApi.getPermissions(userId);
  }

  forgotPassword(emailAddress: string): Observable<any> {
    return this._securityApi.forgotPassword(emailAddress);
  }

  resetPassword(newPassword: string, tempKey: string): Observable<any> {
    return this._securityApi.resetPassword(newPassword,tempKey);
  }

  changePassword(oldPassword: string,newPassword: string): Observable<any> {
    return this._securityApi.changePassword(oldPassword, newPassword);
  }
}

