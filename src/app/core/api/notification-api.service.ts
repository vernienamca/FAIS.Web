import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable} from 'rxjs';

@Injectable()
export class NotificationApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;



  addStringInterpolation(stringInterpolationDTO: any): Observable<any> {
    return this.post<any>(`${this._apiUrl}/Notification/AddStringInterpolation`, stringInterpolationDTO);
  }

  updateStringInterpolation(id: number, stringInterpolationDTO: any): Observable<any> {
    return this.put<any>(`${this._apiUrl}/Notification/UpdateStringInterpolation/${id}`, stringInterpolationDTO);
  }
  
}