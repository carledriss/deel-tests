const Page = require('./page');

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class Login extends Page {

    constructor() {
        super();
        this.inputEmailAddress = 'input[name="email"]';
        this.inputPassword = 'input[name="password"]';
        this.btnSubmit = 'button[data-qa="log-in"]';
    }

    /**
     * a method to encapsulate automation code to interact with the page
     * e.g. to login using emailAddress and password
     */
    async login(emailAddress, password) {
        await $(this.inputEmailAddress).setValue(emailAddress);
        await $(this.inputPassword).setValue(password);
        await $(this.btnSubmit).click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new Login();
