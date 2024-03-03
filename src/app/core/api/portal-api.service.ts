import { environment } from "src/environments/environment";
import { BaseApi } from "./base-api.service";
import { Observable } from "rxjs";
import { IModule } from "../models/module";
import { IRole } from "../models/role";
import { IUser, IUserRole } from "../models/user";
import { IAuditLogs } from "../models/audit-logs";
import { IStringInterpolation } from "../models/string-interpolation";
import { ITemplates } from "../models/templates";
import { HttpResponse } from '@angular/common/http';
import { ISettings } from "../models/settings";
import { ICostCenter } from "../models/cost-center";
import { ILibraryTypeOption } from "../models/library-type-option";
import { IProFormaEntry } from "../models/pro-forma-entry";
import { IChart } from "../models/chart";
import { ILibraryTypes } from "../models/library-types";

export class PortalApi extends BaseApi {
    private _apiUrl = `${environment.apiGatewayBaseUrl}`;

    getGreetings(id: number): Observable<string> {
        return this.get<string>(`${this._apiUrl}/dashboard/greeting/${id}`);
    }

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

    updaterolepermission(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/permission/role`, data);
    }

    getUsers(): Observable<IUser[]> {
        return this.get<IUser>(`${this._apiUrl}/user/get`);
    }

    getUser(id: number) {
        return this.get<any>(`${this._apiUrl}/user/${id}`, {});
    }

    getUserRoles(userId: number): Observable<IUserRole[]> {
        return this.get<IUserRole[]>(`${this._apiUrl}/user/roles/${userId}`);
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

    exportAuditLogs(): Observable<HttpResponse<Blob>> {
        return this.get(`${this._apiUrl}/auditLog/export`,
            {
                observe: 'response',
                responseType: 'blob' as 'json'
            });
    }

    getSetting(id: number): Observable<ISettings> {
        return this.get<ISettings>(`${this._apiUrl}/settings/${id}`);
    }

    updateModule(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/module`, data);
    }

    updatesettings(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/settings`, data);
    }

    createInterpolation(data: any): Observable<any> {
        return this.post<any>(`${this._apiUrl}/notification/interpolation`, data);
    }

    updateInterpolation(id: number, data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/notification/interpolation/${id}`, data);
    }

    getAppVersions(): Observable<any[]> {
        return this.get<any>(`${this._apiUrl}/version/get`);
    }

    createVersion(data: any): Observable<any> {
        return this.post<any>(`${this._apiUrl}/version`, data);
    }

    getCostCenters(): Observable<ICostCenter[]> {
        return this.get<ICostCenter>(`${this._apiUrl}/costcenter/get`);
    }

    getProFormaEntries(): Observable<IProFormaEntry[]> {
        return this.get<IProFormaEntry>(`${this._apiUrl}/proformaentry/get`);
    }

    getProFormaEntry(id: number): Observable<IProFormaEntry> {
        return this.get<IProFormaEntry>(`${this._apiUrl}/proformaentry/${id}`);
    }

    updateProFormaEntry(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/proformaentry`, data);
    }

    exportProFormaEntries(): Observable<HttpResponse<Blob>>  {
        return this.get(`${this._apiUrl}/proFormaentry/export`,  
        {
            observe: 'response',
            responseType: 'blob' as 'json'
        });
    }

    getLibraryTypeOptions(): Observable<ILibraryTypeOption[]> {
        return this.get<ILibraryTypeOption>(`${this._apiUrl}/librarytypeoption`);
    }

    getLibraryTypeOption(id: number): Observable<ILibraryTypeOption> {
        return this.get<ILibraryTypeOption>(`${this._apiUrl}/librarytypeoption/${id}`);
    }

    getLibraryType(): Observable<ILibraryTypes[]> {
        return this.get<ILibraryTypes>(`${this._apiUrl}/librarytype/get`);
    }

    exportLibraryTypeOptions(): Observable<HttpResponse<Blob>>  {
        return this.get(`${this._apiUrl}/librarytypeoption/export`,   
        {
            observe: 'response',
            responseType: 'blob' as 'json'
        });
    }


    updateLibraryTypeOption(data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/librarytypeoption`, data);
    }

    createLibraryTypeOption(data: any): Observable<any> {
        return this.post<any>(`${this._apiUrl}/librarytypeoption`, data);
    }

    getChartAccounts(): Observable<IChart[]> {
        return this.get<IChart[]>(`${this._apiUrl}/chartofaccounts/get`);
    }
    
    exportChartLogs(): Observable<HttpResponse<Blob>>  {
        return this.get(`${this._apiUrl}/chartofaccounts/export`, 
        {
            observe: 'response',
            responseType: 'blob' as 'json'
        });
    }

    addChartOfAccounts(chartOfAccounts: any): Observable<any> {
        return this.post<any>(`${this._apiUrl}/chartofaccounts`, chartOfAccounts);
    }

    getChartOfAccountsById(id: number): Observable<IChart> {
        return this.get<IChart>(`${this._apiUrl}/chartofaccounts/${id}`);
    }

    getLibraryTypes(): Observable<ILibraryTypes[]> {
        return this.get<ILibraryTypes[]>(`${this._apiUrl}/librarytype/get`);
    }
    
    updateChartOfAccounts(id: number, data: any): Observable<any> {
        return this.put<any>(`${this._apiUrl}/chartofaccounts/${id}`, data);
    }
}