import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { IPermission } from '../models/permission';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';

@Injectable()
export class UserApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  
  GetLibraryNamesByCode(libraryCode: string): Observable<any> {
    return this.get<any>(`${this._apiUrl}/User/GetLibraryNamesByCode/${libraryCode}`);
  }

  addUser(userDTO: any): Observable<any> {
    return this.post<any>(`${this._apiUrl}/User/AddUser`, userDTO);
  }


}
