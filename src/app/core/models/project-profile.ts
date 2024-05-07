export interface IProjectProfile {
    id:number;
    projectName: string;
    projClassSeq: string;
    projectStageSeq: string;
    tpsrMonth: string;
    noOfComponentsCompleted: string;
    noOfComponentsUnderConstruction: string;
    latestInspectionDate: string;
    totalAMRCost: string;
    recordedAMR: string;
    unrecordedAMR: string;
    remarks: string;
    status: string;
    statusDate?: Date
    isActive: string;
    createdBy: number;
    createdByName: string;
    createdAt: Date;
    updatedBy?: number;
    updatedByName: string;
    updatedAt?: Date;
    projectProfileCostCenterDTO: IProjectProfileCostCenter[];
    projectProfileCostCenterModel: IProjectProfileCostCenter[];
    projectProfileCostCenter: IProjectProfileCostCenter[];
}

export interface IProjectProfileCostCenter {
    id: number;
    projectProfileId: number;
    costCenterType: string;
    costCenterNo: string;
    costCenter: string;
    dateRemoved: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
  }
  


        