export interface IAssetProfile {
    id: number,
    name: string,
    assetCategoryId: string,
    assetClassId: number,
    description: string,
    rcaGLId: number,
    rcaSLId: number,
    costCenter?: number,
    economicLife?: string,
    residualLife?: string,
    isActive: string;
    statusDate: Date;
    dateCreated: Date,
    updatedAt?: Date;
    createdBy: string;
    updatedBy? :string;
    udf1?: string;
    udf2?: string;
    udf3?: string;
  }