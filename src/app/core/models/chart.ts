export interface IChart {
  id: number;
  accountGroupId: number;
  subAccountGroupId: number;
  rcaGL: string;
  rcaSL: string;
  rcaLedgerTitle: string;
  isActive: string;
  statusDate: Date;
  createdBy: string;
  createdAt: Date;
  updatedBy?: string;
  updatedAt?: Date;
  acountGroup: string;
  subAcountGroup: string;
  chartOfAccountDetailsDTO: IChartDetails[];
  chartOfAccountDetailModel: IChartDetails[];
} 

export interface IChartDetails {
  id: number;
  chartOfAccountsId: number;
  gl: number;
  sl: number;
  ledgerTitle: number;
  dateRemoved: Date;
  createdBy: number;
  createdAt: Date;
  updatedBy: number;
  updatedAt: Date;
}
