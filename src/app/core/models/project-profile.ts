export interface IProjectProfile {
    id: number,
    projectName: string,
    projClassSeq?: string,
    projectStageSeq?: string,
    tpsrMonth?: string,
    numComponentsCompleted?: string,
    numComponentUnderConstruction?: string,
    latestInspectionDate?: Date,
    totalAMRCost?: number,
    recordedAMR?: number,
    unrecordedAMR?: number,
    remarks?: string,
    isActive: string;
    statusDate: Date;
    dateCreated: Date,
    updatedAt?: Date;
    createdBy: string;
    updatedBy? :string;
  }