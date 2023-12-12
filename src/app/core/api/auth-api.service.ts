import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthApi extends BaseApi {
  private _apiUrl = `${environment.apiGatewayBaseUrl}/api`;

  authenticate(username: string, password: string): Observable<any> {
    return this.get<any>(`${this._apiUrl}/auth/authenticate?username=${username}&password=${password}`);
  }
}
