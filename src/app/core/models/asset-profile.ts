export interface IAssetProfile {
    id: number,
    name: string,
    category: string,
    assetClass: number,
    description: string,
    rcaGLId: number,
    rcaslId: number,
    costCenter: number,
    economicLife: string,
    residualLife: string,
    isActive: string;
    statusDate: Date;
    dateCreated: Date,
    updatedAt?: Date;
    createdBy: string;
    updatedBy? :string;
  }