import { environment } from "src/environments/environment";
import { BaseApi } from "./base-api.service";
import { Observable } from "rxjs";
import { IModule } from "../models/module";
import { IRole } from "../models/role";
import { IUser } from "../models/user";
import { IAuditLogs } from "../models/audit-logs";
import { IStringInterpolation } from "../models/string-interpolation";
import { ITemplates } from "../models/templates";
import { HttpResponse } from '@angular/common/http';
import { ISettings } from "../models/settings";

export class PortalApi extends BaseApi {
    private _apiUrl = `${environment.apiGatewayBaseUrl}`;

    getModules(): Observable<IModule[]> {
        return this.get<IModule>(`${this._apiUrl}/module/get`);
    }

    getRoles(): Observable<IRole[]> {
        return this.get<IRole>(`${this._apiUrl}/role/get`);
    }

    getRoleId(id: number): Observable<IRole[]> {
        return this.get<IRole>(`${this._apiUrl}/role/role-permission/${id}`);
    }

    updaterolepermission(data:any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/role/update-role`, data);
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

    getStringInterpolation(): Observable<IStringInterpolation[]> {
        return this.get<IStringInterpolation>(`${this._apiUrl}/notification/interpolations`);
    }

    getTemplates(): Observable<ITemplates[]> {
        return this.get<ITemplates>(`${this._apiUrl}/notification/templates`);
    }

    exportAuditLogs(): Observable<HttpResponse<Blob>>  {
        return this.get(`${this._apiUrl}/auditLog/export`, 
        {
            observe: 'response',
            responseType: 'blob' as 'json'
        });
    }

    openFolder(): Observable<any> {
        return this.get<any>(`${this._apiUrl}/auditLog/open-folder`);
    }

    getSettingsId(id: number) : Observable<ISettings>{
        return this.get<ISettings>(`${this._apiUrl}/settings/${id}`);
    }

    updatesettings(data:any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/settings`, data);
    }
}