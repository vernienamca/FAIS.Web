export interface ICostCenter {
    id: number;
    fgCode: string;
    number: string;
    name: string;
    shortName: string;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
}
  