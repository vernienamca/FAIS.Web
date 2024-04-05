import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';
import { IPermission } from '../models/permission';
import { ISettings } from '../models/settings';
import { IUser } from '../models/user';

@Injectable()
export class securityApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  getPermissions(userId: number): Observable<IPermission[]> {
    return this.get<IPermission[]>(`${this._apiUrl}/user/permissions/${userId}`);
  }

  getSettings(id: number): Observable<ISettings> {
    return this.get<ISettings>(`${this._apiUrl}/user/settings/${id}`);
  }

  getUserByTempKey(tempKey: string): Observable<IUser> {
    return this.get<ISettings>(`${this._apiUrl}/user/tempkey/${tempKey}`);
  }

  getGeneratedPassword(): Observable<string> {
    return this.get<string>(`${this._apiUrl}/user/generate`);
  }

  forgotPassword(emailAddress: string): Observable<any> {
    return this.post<any>(`${this._apiUrl}/user/forgot-password/${emailAddress}`, {});
  }

  resetPassword(tempKey: string, newPassword: string): Observable<any> {
    return this.put<any>(`${this._apiUrl}/user/reset-password/${tempKey}/${newPassword}`, {});
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<any> {
    return this.put<any>(`${this._apiUrl}/user/change-password/${userId}/${oldPassword}/${newPassword}`, {});
  }

  createUser(data: IUser): Observable<IUser> {
    return this.post<IUser>(`${this._apiUrl}/user/`, data);
  }

  updateUser(id: number, isMyProfile: boolean, data: IUser): Observable<IUser> {
    return this.put<IUser>(`${this._apiUrl}/user/${id}/${isMyProfile}`, data);
  }

  resetFromGeneratedPassword(userId: number, newPassword: string): Observable<IUser> {
    return this.put<IUser>(`${this._apiUrl}/user/reset-password/${userId}/${newPassword}`, {});
  }
  
  postNotifRole(data: {roleIds: number[], id?: number, assetName?: string, editMode?: boolean }): Observable<any> {
    return this.post<any>(`${this._apiUrl}/user/asset-profile-notif`, data);
}
}