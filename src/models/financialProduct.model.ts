export abstract class FinancialProductModel {
    valueInvest: number;
    fee: number;
    getProjectValue() {
        return this.valueInvest * this.fee;
    }
}