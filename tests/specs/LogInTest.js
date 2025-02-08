import CommonPage from "../pages/common.js";
import LogInPage from "../pages/LogInPage.js";


describe('login', () => {
    let logInPage;
    let commonPage;

    before(() => {
        logInPage = new LogInPage();
        commonPage = new CommonPage();
    })

    it('should have login with email button', async()=>{
        await commonPage.verifyBreadCrumb();
        await logInPage.verifyLoginBtn();
    })

    it('Should have email field validation error', async() => {
        await logInPage.verifyLogIn('','1234@Abc');
        const blankEmailFieldValidationError = await logInPage.verifyBlankEmailFieldErrorText();
        expect(blankEmailFieldValidationError).toEqual('Email is required.');
    })
    it('Should have password field validation error', async() => {
        await logInPage.verifyLogIn('muhaiminulbs23@gmail.com','');
        const blankPasswordFieldValidationError = await logInPage.verifyBlankPasswordFieldErrorText();
        expect(blankPasswordFieldValidationError).toEqual('Please enter a valid password');
    })
    it('Should have invalid error', async() => {
        await logInPage.verifyLogIn('muhaiminulbs23@gmail.com','1234@Abck');
        const invalidLogInError = await logInPage.verifyInvalidEmailORPasswordErrorText();
        expect(invalidLogInError).toEqual('Invalid username or password.');
        await logInPage.verifyInvalidLogInPopUpCloseErrorOkButton();
    })
    it('Should login successfully', async() => {
        await logInPage.verifyLogIn('muhaiminulbs23@gmail.com','1234@Abc');
    })

})