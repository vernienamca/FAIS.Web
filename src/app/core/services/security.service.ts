
import { securityApi } from '../api/security-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPermission } from '../models/permission';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';
import { ISettings } from '../models/settings';
import { IUser, IUserRole } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  navigationItems$ = new BehaviorSubject<NavigationItem[]>([]);
  userRoles$ = new BehaviorSubject<IUserRole[]>(null);
  
  constructor(private _securityApi: securityApi) { }

  getPermissions(userId: number): Observable<IPermission[]> {
    return this._securityApi.getPermissions(userId);
  }

  getSettings(id: number): Observable<ISettings> {
    return this._securityApi.getSettings(id);
  }

  getUserByTempKey(tempKey: string): Observable<IUser> {
    return this._securityApi.getUserByTempKey(tempKey);
  }

  getGeneratedPassword(): Observable<string> {
    return this._securityApi.getGeneratedPassword();
  }

  forgotPassword(emailAddress: string): Observable<any> {
    return this._securityApi.forgotPassword(emailAddress);
  }

  resetPassword(tempKey: string, newPassword: string): Observable<any> {
    return this._securityApi.resetPassword(tempKey, newPassword);
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this._securityApi.changePassword(userId, oldPassword, newPassword);
  }

  createUser(data: IUser): Observable<IUser> {
    return this._securityApi.createUser(data);
  }

  updateUser(id: number, isMyProfile: boolean, data: IUser): Observable<IUser> {
    return this._securityApi.updateUser(id, isMyProfile, data);
  }

  resetFromGeneratedPassword(userId: number, newPassword: string): Observable<IUser> {
    return this._securityApi.resetFromGeneratedPassword(userId, newPassword);
  }
}

