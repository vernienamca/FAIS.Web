import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseApi } from './base-api.service';
import { Observable} from 'rxjs';

@Injectable()
export class UserApi extends BaseApi {  
  private _apiUrl = `${environment.apiGatewayBaseUrl}`;

  getLastLoginDate(userId: number): Observable<any> {
    return this.get<any>(`${this._apiUrl}/User/GetLastLoginDate?userId=${userId}`);
  }
  
  updateUser(id: number, userDTO: any): Observable<any> {
    return this.put<any>(`${this._apiUrl}/User/UpdateUser/${id}`, userDTO);
  }
  
  uploadFile(directory: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.post<any>(`${this._apiUrl}/User/UploadFile?directory=${directory}`, formData);
  }
}
