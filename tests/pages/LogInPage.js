export default class LogInPage {
    getLogInBtn() {
        return $('//android.widget.TextView[@text="Continue"]');
    }

    getContinueWithEmailLogIn() {
        return $('//android.widget.TextView[@text="Continue with Email"]')
    }

    getEmailField() {
        return $('//android.widget.EditText[@hint="Email"]')
    }

    getBlankEmailField() {
        return $('//android.widget.TextView[@text="Email is required."]')
    }

    getPasswordField() {
        return $('//android.widget.EditText[@hint="Password"]')
    }

    getBlankPasswordField() {
        return $('//android.widget.TextView[@text="Please enter a valid password"]')
    }

    getInvalidEmailORPasswordErrorText() {
        return $('//android.widget.TextView[@text="Invalid username or password."]')
    }

    getLogInButton() {
        return $('//android.widget.TextView[@text="Sign in with email"]')
    }

    getInvalidLogInPopUpClose() {
        return $('//android.widget.TextView[@text="Ok"]')
    }

    async verifyLoginBtn() {
        await this.getLogInBtn().click();
        await this.getContinueWithEmailLogIn().click();
    }

    async verifyLogIn(email, password) {
        await this.getEmailField().setValue(email.toString());
        await this.getPasswordField().waitForDisplayed({timeout: 5000});
        await this.getPasswordField().setValue(password);
        await driver.hideKeyboard();
        await this.getLogInButton().click();
    }

    async verifyBlankEmailFieldErrorText() {
        return this.getBlankEmailField().getText();
    }

    async verifyBlankPasswordFieldErrorText() {
        return this.getBlankPasswordField().getText();
    }

    async verifyInvalidEmailORPasswordErrorText() {
        return this.getInvalidEmailORPasswordErrorText().getText();
    }

    async verifyInvalidLogInPopUpCloseErrorOkButton() {
        await this.getInvalidLogInPopUpClose().click();
    }
}