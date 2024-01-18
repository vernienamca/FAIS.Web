import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';
import { UserApi } from '../api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  navigationItems$ = new BehaviorSubject<NavigationItem[]>([]);
  
  constructor(private _userApi: UserApi) { }

  updateUser(id: number, userDTO: any): Observable<any> {
    return this._userApi.updateUser(id, userDTO);
  }
  
  getLastLoginDate(userId: number): Observable<any> {
    return this._userApi.getLastLoginDate(userId);
  }

  uploadFile(directory: string, file: File): Observable<any> {  
    return this._userApi.uploadFile(directory,file);
  }
}
