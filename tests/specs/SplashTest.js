import SplashPage from '../pages/splashPage.js';
import CommonPage from "../pages/common.js";


describe('SplashPage', () => {
    let splashPage
    before(() => {
        splashPage = new SplashPage();
    })

    it('Should have location Allow button', async () => {
        await splashPage.verifyLocationAccess();
    })
})