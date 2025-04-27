import HomePage from "../pages/HomePage.js";
import {getCuisinesList} from "../apiCallBack/apiUtils.js";
import testData  from "../config.json"

describe('HomePage', () => {
    let homePage;
    before(() => {
        homePage = new HomePage();
    })

    it('Should click cuisine randomly from home page', async () => {
        await homePage.scrollPopularCuisines();
        await homePage.verifyRandomCuisinesSelections();
    })
})