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
  createdBy: string,
  createdAt: Date,
  updatedBy?: string;
  updatedAt?: Date
}
