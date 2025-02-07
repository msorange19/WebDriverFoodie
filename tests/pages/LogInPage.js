export default class LogInPage{
    getLogInBtn()
    {
        return $('//android.widget.TextView[@text="Log In"]');
    }
    getContinueWithEmailLogIn()
    {
        return $('//android.widget.TextView[@text="Continue with Email"]')
    }
    getEmailField()
    {
        return $('//android.widget.EditText[@text="Email"]')
    }
    getBlankEmailField(){
        return $('//android.widget.TextView[@text="Email is required."]')
    }
    getPasswordField()
    {
        return $('//android.widget.EditText[@text="Password"]')
    }

    async verifyLoginBtn()
    {
        await this.getLogInBtn().click();
        await this.getContinueWithEmailLogIn().click();
    }

    async verifyLogIn(email, password){
        await this.getEmailField().click();
        await this.getEmailField().setValue(email);
        await this.getPasswordField().click();
        await this.getPasswordField().setValue(password);
    }
}