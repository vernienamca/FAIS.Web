import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';


@Injectable()
export class RoleApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  getById(userId: number): Observable<any> {
    return this.get<any>(`${this._apiUrl}/Role/GetById`, { params: { id: userId.toString() } });
  }
  
  getUserRoles(userId: number): Observable<string[]> {
    return this.get<string[]>(`${this._apiUrl}/Role/user-roles/${userId}`);
  }
}
