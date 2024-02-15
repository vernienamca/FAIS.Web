export interface ILibraryTypeOption {
    no: number;
    type: string;
    code: string;
    description: string;
    status: number;
    remarks: string;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
}