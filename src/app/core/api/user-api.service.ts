import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable} from 'rxjs';

@Injectable()
export class UserApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  
  GetLibraryNamesByCode(libraryCode: string): Observable<any> {
    return this.get<any>(`${this._apiUrl}/User/GetLibraryNamesByCode/${libraryCode}`);
  }

  addUser(userDTO: any): Observable<any> {
    return this.post<any>(`${this._apiUrl}/User/AddUser`, userDTO);
  }

  updateUser(id: number, userDTO: any): Observable<any> {
    return this.put<any>(`${this._apiUrl}/User/UpdateUser/${id}`, userDTO);
  }
}
