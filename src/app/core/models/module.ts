export interface IModule {
  id: number;
  name: string;
  description: string;
  url: string;
  groupName: string;
  icon: string;
  isActive: string;
  statusDate: Date;
  createdBy: string,
  createdAt: Date,
  updatedBy?: string;
  updatedAt?: Date;
  create: boolean;
  read: boolean;
  update: boolean;
  isAdded: boolean;
}
