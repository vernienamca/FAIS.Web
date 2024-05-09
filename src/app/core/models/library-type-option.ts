export interface ILibraryTypeOption {
    id:number;
    no: number;
    libraryTypeId: string;
    libraryTypeName: string;
    code: string;
    description: string;
    isActive: string;
    remark: string;
    ranking: string;
    createdBy: number;
    createdByName: string;
    createdAt: Date;
    updatedBy?: number;
    updatedByName: string;
    updatedAt?: Date;
}