import { environment } from "src/environments/environment";
import { BaseApi } from "./base-api.service";
import { Observable } from "rxjs";
import { IModule } from "../models/module";
import { IRole } from "../models/role";
import { IUser } from "../models/user";
import { IAuditLogs } from "../models/audit-logs";
import { HttpResponse } from '@angular/common/http';

export class PortalApi extends BaseApi {
    private _apiUrl = `${environment.apiGatewayBaseUrl}`;

    getModules(): Observable<IModule[]> {
        return this.get<IModule>(`${this._apiUrl}/module/get`);
    }

    getRoles(): Observable<IRole[]> {
        return this.get<IRole>(`${this._apiUrl}/role/get`);
    }

    getRoleId(id: number): Observable<IRole[]> {
        return this.get<IRole>(`${this._apiUrl}/role/getrolepermissionbyid?id=${id}`);
    }

    updaterolepermission(data:any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/role/updaterolepermission`, data);
    }

    getUsers(): Observable<IUser[]> {
        return this.get<IUser>(`${this._apiUrl}/user/get`);
    }

    getUser(id: number) {
        return this.get<any>(`${this._apiUrl}/user/${id}`, {});
    }

    getAuditLogs(): Observable<IAuditLogs[]> {
        return this.get<IAuditLogs>(`${this._apiUrl}/auditLog/get`);
    }

    exportAuditLogs(): Observable<HttpResponse<Blob>>  {
        return this.get(`${this._apiUrl}/auditLog/export`, 
        {
            observe: 'response',
            responseType: 'blob' as 'json'
        });
    }

    openFolder(): Observable<any> {
        return this.get<any>(`${this._apiUrl}/auditLog/folder`);
    }
}