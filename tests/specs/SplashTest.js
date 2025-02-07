import SplashPage from '../pages/splashPage.js';
import CommonPage from "../pages/common.js";


describe('SplashPage', () => {
    const splashPage = new SplashPage();

    it('Should have location Allow button', async() => {

        await splashPage.verifyLocationAccess();
})
})