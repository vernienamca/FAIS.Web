export interface IPermission {
    id: number;
    roleId: number;
    moduleId: number;
    moduleName: string;
    url: string;
    icon: string;
    groupName: string;
    isCreate: boolean;
    isRead: boolean,
    isUpdate: boolean;
    sequence: number;
  }
  