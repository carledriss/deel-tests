const Page = require('./page');

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class ContractType extends Page {

    constructor() {
        super();
        this.linkFixRate = 'a[href="/create/fixed"]';
        this.inputContractName = 'input[name="name"]';
        this.contractTaxResidence = 'div[data-qa="contractor-tax-residence"]';
        this.contractTaxResidenceProvince = 'div[data-qa="contractor-tax-residence-province"]';
        this.inputJobTitle = 'input[name="jobTitle"]';
        this.textAreaScope = 'textarea[name="scope"]';
        this.buttonNext = 'button[data-qa="next"]';
        this.currency = 'div[data-qa="currency-select"]';
        this.inputPaymentRate = 'input[name="rate"]';
        this.paymentFrequency = 'div[data-qa="cycle-select"]';
        this.buttonCreateContract = 'button[data-qa="create-contract"]';
    }

    async clickFixRateLink() {
        await $(this.linkFixRate).click();
    }

    async setContractName(contractName) {
        await $(this.inputContractName).setValue(contractName);
    }

    async selectContractTaxResidence(residence) {
        await $(this.contractTaxResidence).click();
        await $(`//div[@class="deel-ui__select__option-container" and text()="${residence}"]`).click();
    }

    async selectContractTaxResidenceProvince(province) {
        await $(this.contractTaxResidenceProvince).click();
        await $(`//div[@class="deel-ui__select__option-container" and text()="${province}"]`).click();
    }

    async setJobTitle(jobTitle) {
        await $(this.inputJobTitle).setValue(jobTitle);
    }

    async setScope(scope) {
        await $(this.textAreaScope).setValue(scope);
    }

    async clickNextButton() {
        await $(this.buttonNext).click();
    }

    async selectCurrency(currency) {
        await $(this.currency).click();
        await $(`//div[@class="deel-ui__select__option-container" and text()="${currency}"]`).click();
    }

    async setPaymentRate(rate) {
        await $(this.inputPaymentRate).setValue(rate);
    }

    async selectPaymentFrequency(frequency) {
        await $(this.paymentFrequency).click();
        await $(`//div[@class="deel-ui__select__option-container" and text()="${frequency}"]`).click();
    }

    async clickCreateContract() {
        await $(this.buttonCreateContract).click();
        await $('.contract-layout-status').waitForExist({ timeout: 30000 });
    }
}

module.exports = new ContractType();
