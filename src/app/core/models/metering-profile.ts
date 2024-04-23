export interface IMeteringProfile {
    id: number;
    transGrid: number;
    districtSeq: number;
    customer: string;
    meteringPointName: string;
    installationTypeSeq: number;
    facilityLocationSeq: number;
    remarks: string;
    adRegionSeq?: number;
    adProdSeq?: number;
    adMunSeq?: number;
    adBrgySeq?: number;
    isActive: boolean;
    createdBy: string,
    createdAt: Date,
    updatedBy?: string;
    updatedAt?: Date;
    isAdded?: boolean 
  }