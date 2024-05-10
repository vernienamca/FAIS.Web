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
    udf1: string;
    udf2: string;
    udf3: string;
    status: string;
    statusDate?: Date
    isActive: string;
    createdBy: number;
    createdByName: string;
    createdAt: Date;
    updatedBy?: number;
    updatedByName: string;
    updatedAt?: Date;
    projectProfileComponentDTO: IProjectProfileComponent[];
    projectProfileComponentModel: IProjectProfileComponent[];
    projectProfileComponent: IProjectProfileComponent[];
}

export interface IProjectProfileComponent {
    id: number;
    pjcId: number;
    projectComponent: number;
    details: number;
    projectStage: number;
    transmissionGrid: number;
    startDate: number;
    targetDate: number;
    completionDate: number;
    dateRemoved: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
  }
  


        