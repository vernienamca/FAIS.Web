import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PortalApi } from '../api/portal-api.service';
import { IModule } from '../models/module';
import { IRole } from '../models/role';
import { IUser, IUserRole } from '../models/user';
import { IAuditLogs } from '../models/audit-logs';
import { IStringInterpolation } from '../models/string-interpolation';
import { DatePipe } from '@angular/common';
import { ISettings } from '../models/settings';
import { ICostCenter } from '../models/cost-center';
import { ILibraryTypeOption } from '../models/library-type-option';
import { IProFormaEntry } from '../models/pro-forma-entry';
import { IChart } from '../models/chart';
import { ILibraryTypes } from '../models/library-types';
import { IAssetProfile } from '../models/asset-profile';
import { IPermission } from '../models/permission';
import { ITemplate } from '../models/template';
import { IMeteringProfile } from '../models/metering-profile';
import { ITransmissionProfile } from '../models/transmission-profile';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  isMyProfile$ = new BehaviorSubject<boolean>(false);
  addedUserRole$ = new BehaviorSubject<IUserRole>(null);
  userRoleIds$ = new BehaviorSubject<number[]>(null);
  stringInterpolations$ = new BehaviorSubject<IStringInterpolation[]>(null);

  constructor(
    private _portalApi: PortalApi, 
    private _datePipe: DatePipe
  ) {
  }

  getGreetings(id: number): Observable<string> {
    return this._portalApi.getGreetings(id);
  }

  getModules(): Observable<IModule[]> {
    return this._portalApi.getModules();
  }

  getModule(id: number): Observable<IModule> {
    return this._portalApi.getModule(id);
  }

  getRoles(): Observable<IRole[]> {
    return this._portalApi.getRoles();
  }

  getRoleId(id: number): Observable<IRole[]> {
    return this._portalApi.getRoleId(id);
  }

  addRole(role: any): Observable<any> {
    return this._portalApi.addRole(role);
  }

  addPermission(data: any): Observable<IPermission[]> {
    return this._portalApi.addPermission(data);
  }

  updaterolepermission(data: any): Observable<IRole[]> {
    return this._portalApi.updaterolepermission(data);
  }

  getUsers(): Observable<IUser[]> {
    return this._portalApi.getUsers();
  }

  getUser(id: number): Observable<any> {
    return this._portalApi.getUser(id);
  }

  getUserRoles(userId: number): Observable<IUserRole[]> {
    return this._portalApi.getUserRoles(userId);
  }

  getAuditLogs(): Observable<IAuditLogs[]> {
    return this._portalApi.getAuditLogs();
  }

  getStringInterpolations(): Observable<IStringInterpolation[]> {
    return this._portalApi.getStringInterpolations();
  }

  getStringInterpolation(id: number): Observable<IStringInterpolation> {
    return this._portalApi.getStringInterpolation(id);
  }

  getNotificationTemplates(): Observable<ITemplate[]> {
    return this._portalApi.getTemplates();
  }

  getNotificationTemplate(id: number): Observable<ITemplate> {
    return this._portalApi.getTemplate(id);
  }

  getUserActivities(userId: number): Observable<IAuditLogs[]> {
    return this._portalApi.getUserActivities(userId);
  }

  exportAuditLogs(): void {
    this._portalApi.exportAuditLogs().subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition
        ? contentDisposition.split(';')[1].trim().split('=')[1]
        : 'Audit_Logs_' + this._datePipe.transform(new Date(), 'medium') + '.xlsx';

      const blob = new Blob([response.body], { type: 'application/actet-stream' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
  }


  getSetting(id: number): Observable<any> {
    return this._portalApi.getSetting(id);
  }

  updateModule(data: any): Observable<any> {
    return this._portalApi.updateModule(data);
  }

  updatesettings(data: any): Observable<any> {
    return this._portalApi.updatesettings(data);
  }

  createInterpolation(data: IStringInterpolation): Observable<IStringInterpolation> {
    return this._portalApi.createInterpolation(data);
  }

  updateInterpolation(id: number, data: any): Observable<any> {
    return this._portalApi.updateInterpolation(id, data);
  }

  createAlert(data: ITemplate): Observable<ITemplate> {
    return this._portalApi.createAlert(data);
  }

  updateAlert(id: number, data: any): Observable<any> {
    return this._portalApi.updateAlert(id, data);
  }

  getAppVersions(): Observable<any[]> {
    return this._portalApi.getAppVersions();
  }

  createVersion(data: any): Observable<any> {
    return this._portalApi.createVersion(data);
  }

  getCostCenters(): Observable<ICostCenter[]> {
    return this._portalApi.getCostCenters();
  }

  getChartAccounts(): Observable<IChart[]> {
    return this._portalApi.getChartAccounts();
  }
  
  exportChartLogs(): void {
    this._portalApi.exportChartLogs().subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition 
        ? contentDisposition.split(';')[1].trim().split('=')[1] 
        : 'Chart_Logs_' + this._datePipe.transform(new Date(), 'medium') + '.xlsx';

      const blob = new Blob([response.body], { type: 'application/actet-stream' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
  }

  getLibraryTypeOptions(): Observable<ILibraryTypeOption[]> {
    return this._portalApi.getLibraryTypeOptions();
  }

  getLibraryTypeOption(id: number): Observable<ILibraryTypeOption> {
    return this._portalApi.getLibraryTypeOption(id);
  }

  updateLibraryTypeOption(data: any): Observable<any> {
    return this._portalApi.updateLibraryTypeOption(data);
  }

  exportLibraryTypeOptions(): void {
    this._portalApi.exportLibraryTypeOptions().subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition 
        ? contentDisposition.split(';')[1].trim().split('=')[1] 
        : 'Library_Type_Options_' + this._datePipe.transform(new Date(), 'medium') + '.xlsx';

        const blob = new Blob([response.body], { type: 'application/actet-stream' });
  
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      });
    }

  createLibraryTypeOption(data: any): Observable<any> {
    return this._portalApi.createLibraryTypeOption(data);
  }

  getLibraryType(id: number): Observable<ILibraryTypes> {
    return this._portalApi.getLibraryType(id);
  }

  createLibraryType(data: any): Observable<any> {
    return this._portalApi.createLibraryType(data);
  }

  updateLibraryType(data: any): Observable<any> {
    return this._portalApi.updateLibraryType(data);
  }

  getProFormaEntries(): Observable<IProFormaEntry[]> {
    return this._portalApi.getProFormaEntries();
  }

  getProFormaEntry(id: number): Observable<IProFormaEntry> {
    return this._portalApi.getProFormaEntry(id);
  }
  addProFormaEntry(proFormaEntry: any): Observable<any> {
    return this._portalApi.addProFormaEntry(proFormaEntry);
  }
  updateProFormaEntry(id: number, data: any): Observable<any> {
    return this._portalApi.updateProFormaEntry(id,data);
}

deleteProFormaEntry(id: number): Observable<any> {
  return this._portalApi.deleteProFormaEntry(id);
}
  exportProFormaEntries(): void {
    this._portalApi.exportProFormaEntries().subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = contentDisposition 
        ? contentDisposition.split(';')[1].trim().split('=')[1] 
        : 'Pro_Forma_Entries_' + this._datePipe.transform(new Date(), 'medium') + '.xlsx';

        const blob = new Blob([response.body], { type: 'application/actet-stream' });
  
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      });
  }

  createChartOfAccounts(chartOfAccounts: any): Observable<any> {
    return this._portalApi.createChartOfAccounts(chartOfAccounts);
  }

  getChartOfAccountsById(id: number): Observable<IChart> {
    return this._portalApi.getChartOfAccountsById(id);
  }

  getLibraryTypes(): Observable<ILibraryTypes[]> {
    return this._portalApi.getLibraryTypes();
  }
  
  updateChartOfAccounts(id: number, data: any): Observable<any> {
    return this._portalApi.updateChartOfAccounts(id,data);
}
  getAssetProfiles(): Observable<IAssetProfile[]> {
    return this._portalApi.getAssetProfiles();
  }

  createAssetProfile(assetProfile: any): Observable<any> {
    return this._portalApi.createAssetProfile(assetProfile);
}

  updateAssetProfile(id: number , data:any): Observable<any> {
    return this._portalApi.updateAssetProfile(id,data);
}

  getAssetProfile(id: number): Observable<IAssetProfile> {
    return this._portalApi.getAssetProfile(id);
}

getMeteringProfiles(): Observable<IMeteringProfile[]> {
  return this._portalApi.getMeteringProfiles();
}
getMeteringProfile(id: number): Observable<IMeteringProfile> {
  return this._portalApi.getMeteringProfile(id);
}

createMeteringProfile(data: any): Observable<any> {
  return this._portalApi.createMeteringProfile(data);
}

updateMeteringProfile(data: any): Observable<any> {
  return this._portalApi.updateMeteringProfile(data);
}

getRegions(): Observable<any[]> {
  return this._portalApi.getRegions();
}

getProvinces(): Observable<any[]> {
  return this._portalApi.getProvinces();
}

getBarangays(): Observable<any[]> {
  return this._portalApi.getBarangays();
}

getMunicipalities(): Observable<any[]> {
  return this._portalApi.getMunicipalities();
}

  getStringDate(d: Date | string): string {
    if (typeof d == "string") return d; 
    
    let sDate: string = "";

    sDate = d.getUTCFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + (d.getUTCDate() + 1) + "T00:08:00.000Z";
    return sDate;
  }

getTransmissionProfiles(): Observable<any[]> {
 return this._portalApi.getTransmissionProfiles();
}

getTransmissionProfile(id: number): Observable<ITransmissionProfile>{
  return this._portalApi.getTransmissionProfile(id);
}

createTransmissionProfile(transmissionProfile: any): Observable<any> {
  return this._portalApi.createTransmissionProfile(transmissionProfile);
}

updateTransmissionProfile(id: number, data: any): Observable<any> {
  return this._portalApi.updateTransmissionProfile(id, data);
}
}