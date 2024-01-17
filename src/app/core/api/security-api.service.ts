import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';
import { IPermission } from '../models/permission';
import { IUser } from '../models/user';

@Injectable()
export class securityApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  getPermissions(userId: number): Observable<IPermission[]> {
    return this.get<IPermission[]>(`${this._apiUrl}/user/permissions/${userId}`);
  }

  forgotPassword(emailAddress: string): Observable<any> {
    return this.post<any>(`${this._apiUrl}/user/forgot-password/${emailAddress}`, {});
  }

  resetPassword(newPassword: string, tempKey: string): Observable<any> {
    return this.put<any>(`${this._apiUrl}/Security/reset-password?tempKey=${tempKey}`, { newPassword });
  }

  changePassword(oldPassword: string,newPassword: string): Observable<any> {
    return this.post<any>(`${this._apiUrl}/Security/change-password`, { oldPassword,newPassword });
  }
}
