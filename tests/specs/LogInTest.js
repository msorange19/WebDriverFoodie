import CommonPage from "../pages/common.js";
import LogInPage from "../pages/LogInPage.js";


describe('login', () => {
    const commonPage = new CommonPage();
    const logInPage = new LogInPage();
    it('Should have validation error', async() => {
        await commonPage.verifyBreadCrumb();
        await logInPage.verifyLoginBtn();
        await logInPage.verifyLogIn('','1234@Abc');
        const emailError = await logInPage.verifyBlankEmailFieldErrorText();
        console.log(emailError);
        expect(emailError).toEqual('Email is required.');
    })
    it('Should have logIn', async() => {
        await logInPage.verifyLogIn('muhaiminulbs23@gmail.com','1234@A8bc');
    })

})