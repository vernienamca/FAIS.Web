export class Customer {
  id: number;
  moduleName: string;
  modifiedBy: string;
  dateModified: string;

  constructor(customer) {
    this.id = customer.id;
    this.moduleName = customer.moduleName;
    this.modifiedBy = customer.modifiedBy;
    this.dateModified = customer.dateModified;
  }
}
