export interface IChart {
    id: number;
    acountGroup: string;
    subAcountGroup: string;
    rcaGL: string;
    rcaSL: string;
    rcaLedgerTitle: string;
    isActive: string;
    statusDate: Date;
    createdBy: string,
    createdAt: Date,
    updatedBy?: string;
    updatedAt?: Date;
  }
  
 