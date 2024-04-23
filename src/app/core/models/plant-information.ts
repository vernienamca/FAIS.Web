export interface IPlantInformation {
    id:number;
    plantCode: string;
    substationName: string;
    class: string;
    substationNameOld: string;
    transmissionGrid: string;
    districtOffice: string;
    mtd: string;
    commisioningDate: string;
    googleMapCoordinates: string;
    udf1: string;
    udf2: string;
    udf3: string;
    region: string;
    municipalityCity: string;
    province: string;
    barangay: string;
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
    id: number;
    plantInformationId: number;
    costCenterType: string;
    costCenterNo: string;
    costCenter: string;
    dateRemoved: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
  }
  


        