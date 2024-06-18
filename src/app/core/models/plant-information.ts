export interface IPlantInformation {
    plantCode: string;
    substationName: string;
    substationNameOld: string;
    classId: string;
    transGrid: string;
    districtId: string;
    mtdId: number;
    gmapCoord: string;
    commissionDate: string;
    udF1: string;
    udF2: string;
    udF3: string;
    regionId: string;
    provId: string;
    munId: string;
    brgyId: string;
    isActive: string;
    createdBy: number;
    createdByName: string;
    createdAt: Date;
    updatedBy?: number;
    updatedByName: string;
    updatedAt?: Date;
    plantInformationDetailDTO: IPlantInformationDetails[];
    details: IPlantInformationDetails[];
}

export interface IPlantInformationDetails {
    id: number;
    costCenterType: number;
    costCenterNo: string;
    costCenterTypeLto: string;
    createdBy: number;
    createdAt: Date;
}
  
        