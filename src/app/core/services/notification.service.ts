import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationApi } from '../api/notification-api.service';
import { IModule } from '../models/module';
import { IRole } from '../models/role';
import { IUser } from '../models/user';
import { IAuditLogs } from '../models/audit-logs';
import { IStringInterpolation } from '../models/string-interpolation';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private _notificationApi: NotificationApi, 
    private _datePipe: DatePipe) { }

  addStringInterpolation(data: any): Observable<IStringInterpolation[]> {
    return this._notificationApi.addStringInterpolation(data);
  }

  // updateStringInterpolation(data: any): Observable<IStringInterpolation[]> {
  //   return this._notificationApi.updateStringInterpolation(data);
  // }

}
