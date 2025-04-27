import axios from 'axios';
import testData from "../config.json"


const base_url = process.env.BASE_URL;
let bearerToken = null;
const headers = {
    'Host': testData.headers.Host,
    'Accept': testData.headers.Accept,
    'Origin': testData.headers.Origin,
    'User-Agent': testData.headers.User_Agent,
    'Connection': testData.headers.Connection,
    'sxsrf': testData.headers.sxsrf,
    'Accept-Language': testData.headers.Accept_Language,
    'Content-Type': testData.headers.Content_Type
};

export async function loginAttempt(loginData) {
    try {

        const responseJsonData = await axios.post(base_url + '/users/api/Authentication/Customer/Login', loginData, {headers});
        console.log(responseJsonData);
        if (responseJsonData.data.data.token != null) {
            bearerToken = responseJsonData.data.data.token;
            console.log('BearerToken:', bearerToken);
        }
        return responseJsonData.data;

    } catch (error) {
        console.error(error);
        throw new Error('Sorry API failed to login');
    }

}

export async function getCuisinesList(cuisineBody) {


    try {
        const responseCuisineJsonData = await axios.post(base_url + '/restaurants/api/Branch/GetBranchByCuisineId', cuisineBody,{headers}
        );
        return responseCuisineJsonData.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getCuisinesByCuisineId() {
try {
    const responseCuisineId = await axios.get(base_url+'/restaurants-go/api/v1/cuisines?userLatitude=23.808126127789542&userLongitude=90.37821745499969',{headers});
    return responseCuisineId.data.data.cuisines;

}
catch (error) {
    console.error(error);
}

}


export function getToken() {
    return bearerToken;
}


