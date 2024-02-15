export interface ILibraryTypeOption {
    no: number;
    type: string;
    code: string;
    description: string;
    status: number;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
}