const Page = require('./page');

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class Home extends Page {

    constructor() {
        super();
        this.linkCreateAContract = 'a[href="/create"]';
        this.acceptCookie = '#CybotCookiebotDialogBodyButtonAccept';
    }

    async clickCreateAContractLink() {
        await $(this.linkCreateAContract).click();
    }

    async clickAcceptCookie() {
        await $(this.acceptCookie).click();
    }
}

module.exports = new Home();
