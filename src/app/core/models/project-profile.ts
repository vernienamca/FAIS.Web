export interface IProjectProfile {
    id:number;
    projectName: string;
    projClassSeq: string;
    projStageSeq: string;
    tpsrMonth: Date;
    noOfComponentsCompleted: number;
    noOfComponentsUnderConstruction: number;
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
    projectProfileComponentsDTO: IProjectProfileComponent[];
    projectProfileComponentModel: IProjectProfileComponent[];
    projectProfileComponents: IProjectProfileComponent[];
}

export interface IProjectProfileComponent {
    id: number;
    pjcId: number;
    projectComponent: number;
    details: number;
    projectStageSeq: number;
    transmissionGridSeq: number;
    startDate: string;
    targetDate: string;
    completionDate: string;
    dateRemoved: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
    projectProfileId: number;
  }
  


        