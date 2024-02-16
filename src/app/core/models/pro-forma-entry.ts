export interface IProFormaEntry {
    id: number;
    type: string;
    description: string;
    status: number;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
}