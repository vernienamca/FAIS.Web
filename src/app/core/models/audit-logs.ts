export interface IAuditLogs {
    id: number,
    activity: string,
    oldValues: string,
    newValues: string,
    ipAddress: string,
    userCreated: string,
    dateCreated: Date,
    createdBy: string;
  }
  