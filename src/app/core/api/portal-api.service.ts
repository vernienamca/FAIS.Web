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
import { ICostCenter } from "../models/cost-center";
import { IChart } from "../models/chart";

export class PortalApi extends BaseApi {
    private _apiUrl = `${environment.apiGatewayBaseUrl}`;

    getModules(): Observable<IModule[]> {
        return this.get<IModule[]>(`${this._apiUrl}/module/get`);
    }

    getModule(id: number): Observable<IModule> {
        return this.get<IModule>(`${this._apiUrl}/module/${id}`);
    }

    getRoles(): Observable<IRole[]> {
        return this.get<IRole[]>(`${this._apiUrl}/role/get`);
    }

    getRoleId(id: number): Observable<IRole[]> {
        return this.get<IRole>(`${this._apiUrl}/permission/role/${id}`);
    }

    updaterolepermission(data:any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/permission/role`, data);
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

    getStringInterpolations(): Observable<IStringInterpolation[]> {
        return this.get<IStringInterpolation>(`${this._apiUrl}/notification/interpolations`);
    }

    getStringInterpolation(id: number): Observable<IStringInterpolation> {
        return this.get<IStringInterpolation>(`${this._apiUrl}/notification/interpolation/${id}`);
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

    getSetting(id: number) : Observable<ISettings>{
        return this.get<ISettings>(`${this._apiUrl}/settings/${id}`);
    }

    updateModule(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/module`, data);
    }

    updatesettings(data:any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/settings`, data);
    }

    updateStringInterpolation(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/notification/interpolation`, data);
    }

    getAppVersions(): Observable<any[]> {
        return this.get<any>(`${this._apiUrl}/version/get`);
    }

    addVersion(data:any): Observable<any> {
        return this.post<any>(`${this._apiUrl}/version`, data);
    }

    getCostCenters(): Observable<ICostCenter[]> {
        return this.get<ICostCenter>(`${this._apiUrl}/costcenter/get`);
    }


    getChartAccounts(): Observable<IChart[]> {
        return this.get<IChart[]>(`${this._apiUrl}/ChartOfAccounts/Get`);
    }
    
    exportChartLogs(): Observable<HttpResponse<Blob>>  {
        return this.get(`${this._apiUrl}/ChartOfAccounts/export`, 
        {
            observe: 'response',
            responseType: 'blob' as 'json'
        });
    }
}