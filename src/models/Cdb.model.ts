import { financialProductEntity } from 'src/entities/financialProduct.entity';
import { FinancialProductModel } from './financialProduct.model';

export class CdbProduct
  extends FinancialProductModel
  implements financialProductEntity
{
  id: string;
  name: string;
  valueInvest: number;
  fee: number;

  constructor(valueInvest: number, fee: number, id: string, name: string) {
    super();
    this.valueInvest = valueInvest;
    this.fee = fee;
    this.id = id;
    this.name = name;
  }
  getProjectValue(): number {
    return this.valueInvest * this.fee;
  }
}
