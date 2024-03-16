export interface ITransmissionLine {
    id: number;
    lineStretch: number;
    voltage: number;
    totalStructures: number;
    noOfCircuit: number;
    routeLength: number;
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
  