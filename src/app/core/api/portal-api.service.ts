import { environment } from "src/environments/environment";
import { BaseApi } from "./base-api.service";
import { Observable } from "rxjs";
import { IModule } from "../models/module";
import { IRole } from "../models/role";
import { IUser } from "../models/user";

export class PortalApi extends BaseApi {
    private _apiUrl = `${environment.apiGatewayBaseUrl}`;

    getModules(): Observable<IModule[]> {
        return this.get<IModule>(`${this._apiUrl}/module/get`);
    }

    getRoles(): Observable<IRole[]> {
        return this.get<IRole>(`${this._apiUrl}/role/get`);
    }

    getUsers(): Observable<IUser[]> {
        return this.get<IUser>(`${this._apiUrl}/user/get`);
    }

    getUser(id: number) {
        return this.get<any>(`${this._apiUrl}/user/getbyid?id=${id}`, {});
    }
}