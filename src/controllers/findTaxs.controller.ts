import { Controller, Get, Param } from '@nestjs/common';
import { centralBankServices } from 'src/services/centralBank.service';

@Controller()
export class FindTaxsController {
  @Get('product/:id')
  public async findTaxsForProductById(@Param('id') id: string) {
    try {
      const productFound = await centralBankServices.getTaxValuesForProductById(id);
      return productFound;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
}
