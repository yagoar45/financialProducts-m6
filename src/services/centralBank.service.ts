import axios from "axios";

async function getTaxValuesForProductById(productId: string): Promise <number> {
    const fetchProduct = await axios.post('https://algumaapiporai.com.br', {productId});
    return fetchProduct.data.tax;
}

export const centralBankServices = {getTaxValuesForProductById}