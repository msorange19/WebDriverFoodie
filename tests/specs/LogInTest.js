import CommonPage from "../pages/common.js";
import LogInPage from "../pages/LogInPage.js";
import HomePage  from "../pages/HomePage.js";
import testData  from "../config.json"
import {loginAttempt} from "../apiCallBack/apiUtils.js";
import fs from 'fs';
import path from 'path';

describe('login', () => {
    let logInPage;
    let commonPage;
    let homePage;

    before(() => {
        logInPage = new LogInPage();
        commonPage = new CommonPage();
        homePage = new HomePage();
    })

    it('should have login with email button', async()=>{
        await commonPage.verifyBreadCrumb();
        await logInPage.verifyLoginBtn();
    })

    it('Should have email field validation error', async() => {
        await logInPage.verifyLogIn('',testData.valid_data_log_in.password);
        const blankEmailFieldValidationError = await logInPage.verifyBlankEmailFieldErrorText();
        expect(blankEmailFieldValidationError).toEqual('Email is required.');
    })
    it('Should have password field validation error', async() => {
        await logInPage.verifyLogIn(testData.valid_data_log_in.user_name,'');
        const blankPasswordFieldValidationError = await logInPage.verifyBlankPasswordFieldErrorText();
        expect(blankPasswordFieldValidationError).toEqual('Please enter a valid password');
    })
    it('Should have invalid error', async() => {
        await logInPage.verifyLogIn(testData.invalid_data_log_in.user_name,testData.invalid_data_log_in.password);
        const invalidLogInError = await logInPage.verifyInvalidEmailORPasswordErrorText();
        expect(invalidLogInError).toEqual('Invalid username or password.');
        await logInPage.verifyInvalidLogInPopUpCloseErrorOkButton();
    })
    it('Should login successfully', async() => {
        await logInPage.verifyLogIn(testData.valid_data_log_in.user_name,testData.valid_data_log_in.password);
        const newUser = await loginAttempt({ userName:testData.valid_data_log_in.user_name ,password : testData.valid_data_log_in.password });
        console.log('New User:', newUser);
        await homePage.verifyRandomCuisinesSelections();

    })

})