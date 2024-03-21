export interface IAlert {
    id: number;
    subject: string;
    startDate?: string;
    startTime?: string;
    endDate?: string;
    endTime?: string;
    content?: string;
    target?: string;
    roles?: string[];
    users?: string[];
    type?: string;
    iconColor?: string;
    icon?: string;
    status?: number;
    statusDate?: number;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
}