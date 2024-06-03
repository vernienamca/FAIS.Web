export interface ILibraryTypeOption {
    id:number;
    no: number;
    libraryTypeId: string;
    libraryTypeName: string;
    code: string;
    description: string;
    isActive: string;
    remarks: string;
    ranking: string;
    udF1: string;
    udF2: string;
    udF3: string;
    createdBy: number;
    createdByName: string;
    createdAt: Date;
    updatedBy?: number;
    updatedByName: string;
    updatedAt?: Date;
}

export interface DropdownValueModel {
    libraryTypeId: number;
    parentId: number;
    libraryTypeName: string;
    dropdownCode: string;
    dependentCode: string;
    parentValue: string;
    description: string;
    childValues: ChildValueModel[];
}

export interface ChildValueModel {
    id: number;
    description: string;
}