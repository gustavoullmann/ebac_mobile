import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js';
import { addSubSuite } from '@wdio/allure-reporter';
import signUpPage from '../pageobjects/signUp.page.js';
import { faker } from '@faker-js/faker';

describe('My Sign Up application', () => {
    it('should register new user', async () => {

        var firstName = faker.person.firstName()
        var lastName = faker.person.lastName()
        var phone = faker.phone.number()
        var email = faker.internet.email()

        await homePage.openMenu('profile')
        await loginPage.signUpClick()
        await signUpPage.signUp(firstName, lastName, phone, email, 'Abc123@#')
        expect((await homePage.pageTitle()).isDisplayed()).toBeTruthy()
    }),

    it('Should navigate back from sign up to login page', async () => {
        await homePage.openMenu('profile')
        await loginPage.signUpClick()
        await signUpPage.goBack()
        expect((await loginPage.btnLogin.isDisplayed()))
    })
})

