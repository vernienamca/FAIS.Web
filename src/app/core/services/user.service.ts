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

  getLibraryNamesByCode(libraryCode: string): Observable<any> {
    return this._userApi.GetLibraryNamesByCode(libraryCode);
  }

  addUser(userDTO: any): Observable<any> {
    return this._userApi.addUser(userDTO);
  }

}
