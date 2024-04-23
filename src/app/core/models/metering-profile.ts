export interface IMeteringProfile {
    id: number;
    transGrid: number;
    districtSeq: number;
    customer: string;
    meteringPointName: string;
    meteringClass?: string;
    installationTypeSeq: number;
    facilityLocationSeq: number;
    remarks: string;
    adRegionSeq?: number;
    adProdSeq?: number;
    adMunSeq?: number;
    adBrgySeq?: number;
    lineSegment?: string;
    isActive: boolean;
    createdBy: string,
    createdAt: Date,
    updatedBy?: string;
    updatedAt?: Date;
    isAdded?: boolean 
  }