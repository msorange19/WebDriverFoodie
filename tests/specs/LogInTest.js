import CommonPage from "../pages/common.js";
import LogInPage from "../pages/LogInPage.js";


describe('login', () => {
    const commonPage = new CommonPage();
    const logInPage = new LogInPage();

    it('Should have logIn', async() => {
        await commonPage.verifyBreadCrumb();
        await logInPage.verifyLoginBtn();
        await logInPage.verifyLogIn('muhaiminulbs23@gmail.com','1234@Abc');
    })
})