import {randomSelections} from "./common.js";

export default class HomePage{
    getCuisines(){
        return $$('//android.widget.ScrollView//android.view.ViewGroup[6]//android.widget.TextView')
    }
    async verifyRandomCuisinesSelections(){
        const cuisines = await this.getCuisines();
        const cuisinesCount = cuisines.length;
        const selectCuisine =  randomSelections(cuisinesCount);
        const selectRandomCuisine = cuisines[selectCuisine];
        await selectRandomCuisine.waitForDisplayed({ timeout: 5000 });
        await selectRandomCuisine.click();
    }
}