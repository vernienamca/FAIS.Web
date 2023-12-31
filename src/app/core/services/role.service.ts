
import {RoleApi} from '../api/role-api.service'
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationItem } from 'src/@vex/interfaces/navigation-item.interface';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  navigationItems$ = new BehaviorSubject<NavigationItem[]>([]);
  
  constructor(private _roleApi: RoleApi) { }

  getById(userId: number): Observable <any> {
    return this._roleApi.getById(userId);
  }
}

