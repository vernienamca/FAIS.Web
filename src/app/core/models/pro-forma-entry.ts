export interface IProFormaEntry {
    id: number;
    tranTypeSeq: string;
    description: string;
    isActive: string;
    statusDate: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy?: number;
    updatedAt?: Date;
    proFormaEntryDetailsDTO: IProFormaEntryDetails[];
    proFormaEntryDetailModel: IProFormaEntryDetails[];
    proformaEntryDetails: IProFormaEntryDetails[];
  } 
  
  export interface IProFormaEntryDetails {
    id: number;
    proFormaDetailsId: number;
    faisRefNo: string;
    tranTypeSeq: string;
    costCenter: string;
    glNo: string;
    rcaGl: string;
    prefix: string;
    sl: string;
    otherCode: string;
    dce: string;
    plantCode: string;
    wo: string;
    refBillNo: string;
    source: string;
    nature: string;
    aYyyy: string;
    fg: string;
    debit: string;
    credit: string;
    tranDate: string;
    ymPosted: string;
    datecreated: string;
    usercreated: string;
    sort: string;
    udf1: string;
    udf2: string;
    dateRemoved: Date;
    createdBy: number;
    createdAt: Date;
    updatedBy: number;
    updatedAt: Date;
    proformaEntryId: number;
   
  }
  