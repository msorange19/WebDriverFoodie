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
        if (responseJsonData.data && responseJsonData.data.data.token != null) {
            bearerToken = responseJsonData.data.data.token;
            console.log('BearerToken:', bearerToken);
        }
        return responseJsonData.data;

    } catch (error) {
        console.error(error);
        throw error;
    }

}

export function getToken() {
    return bearerToken;
}