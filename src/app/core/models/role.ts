export interface IRole {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  statusDate: Date;
  createdBy: string,
  createdAt: Date,
  updatedBy?: string;
  updatedAt?: Date;
  isAdded?: boolean 
}
