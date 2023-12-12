export interface IModule {
  id: number;
  name: string;
  description: string;
  url: string;
  isActive: boolean;
  statusDate: Date;
  createdBy: string,
  createdAt: Date,
  updatedBy?: string;
  updatedAt?: Date
}
