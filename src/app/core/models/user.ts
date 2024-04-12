export interface IUser {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  employeeNumber: string;
  userName: string;
  position: string;
  division: string;
  emailAddress: string;
  mobileNumber: string;
  photo: string;
  statusCode: string;
  statusDate: Date;
  dateExpired: Date;
  tempKey: string;
  createdBy: string,
  createdAt: Date,
  updatedBy?: string;
  updatedAt?: Date
}

export interface IUserRole {
  id: number;
  userRoleId: number;
  name: string;
  description: string;
  isActive: boolean;
  statusDate: string,
  createdBy: number,
  createdAt: Date,
  updatedBy?: number,
  updatedAt?: Date,
  isNew: boolean
}
