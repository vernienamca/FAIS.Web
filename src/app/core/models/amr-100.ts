export interface IAmr100 {
    result?: {
      id: number;
      amrYm: string;
      dateReceivedTransco: string;
      dateReceivedArmPmd: string;
      dateSentEncoding: string;
      noOfBinders: number;
      udF1: string;
      udF2: string;
      udF3: string;
      createdBy: number | null;
      createdByName: string;
      createdAt: string;
      updatedBy: number | null;
      updatedByName: string;
      updatedAt: string | null;
    };
    id: number;
    amrYm: string;
    date: string; 
    dateReceivedTransco: string;
    dateReceivedArmPmd: string;
    dateSentEncoding: string;
    noOfBinders: number;
    udF1: string;
    udF2: string;
    udF3: string;
  }