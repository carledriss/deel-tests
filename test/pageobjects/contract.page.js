const Page = require('./page');

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class Contract extends Page {

    constructor() {
        super();
        this.contractTitle = '.editable-text h1';
        this.contractCountry = 'div[data-qa="contractors-country"] h4';
        this.jobTitle = 'div[data-qa="job-title"] h4';
        this.scope = 'div[data-qa="dpa-row-undefined-value"] p';
        this.rate = 'div[data-qa="rate"] h4';
    }

    get getContractTitle() {
        return $(this.contractTitle);
    }

    get getContractCountry() {
        return $(this.contractCountry);
    }

    get getJobTitle() {
        return $(this.jobTitle);
    }

    get getScope() {
        return $(this.scope);
    }

    get getRate() {
        return $(this.rate);
    }
}

module.exports = new Contract();
