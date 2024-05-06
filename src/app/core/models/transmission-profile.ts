export interface ITransmissionProfile {
    id: number,
    lineStretch: string,
    voltageId: number,
    st: number,
    sp: number,
    cp: number,
    wp: number,
    slwt: number,
    installationDate: Date,
    routeLegnth: number,
    noCircuitId: number,
    circuitLength: number,
    noConductor: number,
    conductorSize: number,
    remarks: string,
    udf1: string,
    udf2: string,
    udf3: string,
    isActive: string;
    statusDate: Date;
    dateCreated: Date,
    updatedAt?: Date;
    createdBy: string;
    updatedBy :string;
}