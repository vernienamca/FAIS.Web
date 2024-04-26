export interface IMeteringProfile {
    id: number;
    transGrid: number;
    districtSeq: number;
    customer: string;
    meteringPointName: string;
    installationTypeSeq: number;
    facilityLocationSeq: number;
    remarks: string;
    adReqionSeq: number;
    adProvSeq: number;
    adMunSeq: number;
    adBrgySeq: number;
    isActive: boolean;
    statusDate: Date;
    createdBy: string,
    createdAt: Date,
    updatedBy?: string;
    updatedAt?: Date;
    isAdded?: boolean 
  }
  