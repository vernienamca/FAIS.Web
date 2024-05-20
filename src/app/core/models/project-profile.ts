export interface IProjectProfile {
    id:number;
    projectName: string;
    projClassSeq: string;
    projStageSeq: string;
    tpsrMonth: Date;
    noOfComponentsCompleted: string;
    noOfComponentsUnderConstruction: string;
    latestInspectionDate: string;
    totalAMRCost: string;
    recordedAMR: string;
    unrecordedAMR: string;
    remarks: string;
    udF1: string;
    udF2: string;
    udF3: string;
    status: string;
    statusDate?: Date
    isActive: string;
    createdBy: string;
    createdByName: string;
    createdAt: Date;
    updatedBy?: string;
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
  


        