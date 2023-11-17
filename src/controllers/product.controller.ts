import { Controller, Post, Get, Param } from '@nestjs/common';
import { CdbProduct } from 'src/models/Cdb.model';

@Controller()
export class ProductController {
  private DATABASE_URL = process.env.DATABASE_URL;
  private sql;

  @Post('/product')
  public async getProductProjectValue({ id, name, valueInvest, fee }) {
    try {
      if (this.DATABASE_URL) {
        const projectValueForProduct = new CdbProduct(
          valueInvest,
          fee,
          id,
          name,
        );
        return projectValueForProduct.getProjectValue();
      } else {
        return 'acesso inválido';
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }

  @Get('/product/:id')
  public async findProductInDbById(@Param('id') id: string) {
    const productFound = await this.sql.run(
      `SELECT * FROM 'products' WHERE 'productId'=${id}`,
    );
    return productFound;
  }
}
