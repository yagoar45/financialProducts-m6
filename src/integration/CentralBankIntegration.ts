import { centralBankServices } from 'src/services/centralBank.service';

export abstract class CentralBankIntegration {
  async getTaxValuesForProductById(productId: string): Promise<number> {
    const taxForProduct =
      await centralBankServices.getTaxValuesForProductById(productId);

    return taxForProduct;
  }
}
