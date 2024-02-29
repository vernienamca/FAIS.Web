export interface IProFormaEntry {
    id: number;
    type: string;
    description: string;
    isActive: string;
    statusDate: Date;
    createdBy: string;
    createdAt: Date;
    updatedBy?: string;
    updatedAt?: Date;
    proFormaEntryDetailsDTO: IProFormaEntryDetails[];
    proFormaEntryDetailModel: IProFormaEntryDetails[];
  } 
  
  export interface IProFormaEntryDetails {
    id: number;
    proFormaDetailsId: number;
    faisrefno: string,
    transactionseq: string,
    costcenter: string,
    glno: string,
    rcagl: string,
    prefix: string,
    sl: string,
    otherscode: string,
    dce: string,
    plantcode: string,
    wo: string,
    refbillno: string,
    source: string,
    nature: string,
    ayyyy: string,
    fg: string,
    debit: string,
    credit: string,
    trandate: string,
    yearmonthposted: string,
    datecreated: string,
    usercreated: string,
    sortorderno: string,
    udf1: string,
    udf2: string,
    dateRemoved: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
  }
  