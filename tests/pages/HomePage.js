import {randomSelections} from "./common.js";
import {getCuisinesByCuisineId, getCuisinesList} from "../apiCallBack/apiUtils.js";
import testData from "../config.json";

let selectCuisine = 0;
let isVisible = false;
let selectRandomCuisine;
let selectCuisineById;
let cuisinesData = [];
export default class HomePage {
    getHomeBtn(){
        return $('//android.widget.TextView[@text="Home"]')
    }
    getCuisines() {
        return $$('//android.widget.ScrollView//android.view.ViewGroup[6]//android.view.ViewGroup[@content-desc]');
    }

    getCuisineLastViewPort() {
        return $('//android.widget.TextView[@text="Popular Cuisines"]')
    }

    async scrollPopularCuisines() {
        await this.getHomeBtn().click();
        await this.getCuisineLastViewPort().scrollIntoView();
        await browser.pause(1000);

    }

    async verifyRandomCuisinesSelections() {
        const cuisines = await this.getCuisines();
        let cuisinesCount = cuisines.length;
        console.log("cuisinesCount", cuisinesCount);
        do {
            console.log("cuisinesCount", cuisinesCount);
            cuisinesData = await getCuisinesByCuisineId();
           // console.log('Selected cuisineId API', JSON.stringify(cuisineId, null, 2));
            selectCuisine = randomSelections(cuisinesCount);
            console.log(`Trying index: ${selectCuisine}`);

            selectRandomCuisine = cuisines[selectCuisine];
            selectCuisineById = await selectRandomCuisine.getAttribute('content-desc');
            console.log(`Trying click: ${selectCuisineById}`);
            const matchedCuisine = await cuisinesData.find(cuisine => cuisine.name === selectCuisineById);

            if (!matchedCuisine) {
                console.log(`No match found for: ${selectCuisineById}`);
                continue;
            }

            const cuisineId = matchedCuisine.id;
            console.log(`Matched Cuisine ID: ${cuisineId}`);

            if (await selectRandomCuisine.isDisplayed()) {
                isVisible = true;
                console.log(`Selected visible index: ${selectCuisine}`);
                await selectRandomCuisine.waitForDisplayed({timeout: 5000});
                await selectRandomCuisine.click();

                const branchData = await getCuisinesList( {
                    "userLocation": {
                        "longitude": testData.body.longitude,
                        "latitude": testData.body.latitude
                    },
                    "cuisineId": cuisineId,
                    "isDelivery": testData.body.isDelivery,
                    "isPickup": testData.body.isPickup,
                    "isDineIn": testData.body.isDineIn,
                    "isFlower": testData.body.isFlower,
                });
                console.log('Branch API Response:', JSON.stringify(branchData, null, 2));
            } else {
                console.log(`Element at index ${selectCuisine} is not visible, selecting another...`);
            }
        } while (!isVisible && selectCuisine > 0);
    }
}

export function selectCuisineApi() {
    return selectCuisine;
}

export function selectCuisineRandomly() {
    return selectCuisineById;
}

async function selectCuisineByCuisineId(cuisineName) {
}