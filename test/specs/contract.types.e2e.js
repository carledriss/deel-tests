const {credentials} = require('../../environment');

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');
const ContractTypePage = require('../pageobjects/contractType.page');
const ContractPage = require('../pageobjects/contract.page');

describe('Contract Types', () => {
    it('Contract Fixed Rate', async () => {
        await LoginPage.open();
        await LoginPage.login(credentials.username, credentials.password);
        await HomePage.clickCreateAContractLink();
        await HomePage.clickAcceptCookie();

        await ContractTypePage.clickFixRateLink();
        let contractName = 'My Fixed Contract';
        await ContractTypePage.setContractName(contractName);
        let residence = 'United States';
        await ContractTypePage.selectContractTaxResidence(residence);
        let province = 'Colorado';
        await ContractTypePage.selectContractTaxResidenceProvince(province);
        let jobTitle = 'Test Automation Engineer';
        await ContractTypePage.setJobTitle(jobTitle);
        await ContractTypePage.setScope(jobTitle);
        await ContractTypePage.clickNextButton();
        await ContractTypePage.selectCurrency('GBP - British Pound');
        await ContractTypePage.setPaymentRate('1000');
        let frequency = 'Weekly';
        await ContractTypePage.selectPaymentFrequency(frequency);
        await ContractTypePage.clickNextButton();
        await ContractTypePage.clickNextButton();
        await ContractTypePage.clickNextButton();
        await ContractTypePage.clickCreateContract();

        await expect(ContractPage.getContractTitle).toHaveTextContaining(contractName);
        await expect(ContractPage.getContractCountry).toHaveTextContaining(`${province} (${residence})`);
        await expect(ContractPage.getJobTitle).toHaveTextContaining(jobTitle);
        await expect(ContractPage.getScope).toHaveTextContaining(jobTitle);
        await expect(ContractPage.getRate).toHaveTextContaining('£1,000');
        await expect(ContractPage.getRate).toHaveTextContaining(frequency);
    });
});


