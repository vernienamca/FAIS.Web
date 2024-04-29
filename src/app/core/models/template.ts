export interface ITemplate {
    id: number,
    subject: string,
    url: string,
    startDate: Date,
    startTime: string,
    endDate: Date,
    endTime: string,
    content: string,
    target?: string; //receiver | target
    roles?: string;
    users?: string;
    iconColor?: string;
    icon?: string;
    notificationType: string,
    isActive: string,
    statusDate: Date,
    createdBy: string,
    createdAt: Date,
    updatedBy?: string;
    updatedAt?: Date;
  }
  