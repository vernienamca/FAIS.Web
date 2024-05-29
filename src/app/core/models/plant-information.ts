export interface IPlantInformation {
    id: number;
    plantCode: string;
    substationName: string;
    substationNameOld: string;
    classId: string;
    transGrid: string;
    districtId: string;
    mtdId: string;
    gmapCoord: string;
    commissionDate: string;
    udF1: string;
    udF2: string;
    udF3: string;
    regionId: string;
    provId: string;
    munId: string;
    brgyId: string;
    status: string;
    statusDate?: Date
    isActive: string;
    createdBy: number;
    createdByName: string;
    createdAt: Date;
    updatedBy?: number;
    updatedByName: string;
    updatedAt?: Date;
    plantInformationCostCenterDTO: IPlantInformationCostCenter[];
    plantInformationCostCenterModel: IPlantInformationCostCenter[];
    plantInformationCostCenter: IPlantInformationCostCenter[];
}

export interface IPlantInformationCostCenter {
    plantCode: string;
    costCenter: string;
    costCenterTypeLto: string;
    createdBy: number;
    createdAt: Date;
  }
  


        