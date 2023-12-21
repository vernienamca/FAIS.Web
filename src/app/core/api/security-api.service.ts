import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class securityApi extends BaseApi {
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  sendEmail(to: string): Observable<any> {
    return this.post<any>(`${this._apiUrl}/Security/send-email`, { to });
  }

  resetPassword(newPassword: string, tempKey: string): Observable<any> {

    return this.put<any>(`${this._apiUrl}/Security/reset-password?tempKey=${tempKey}`, { newPassword });
}
}
