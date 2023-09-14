const {describe, it, afterEach, beforeEach} = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const LoginPage = require("../pageobjects/loginpage")
const openBrowser = require('../utils/driver.utils')


chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "https://www.saucedemo.com"

//Login test case
describe("Login to Saucedemo using valid and invalid credentials", function() {
    let loginPage
    let driver

    beforeEach(async function() {
        driver = openBrowser()
        loginPage = new LoginPage(driver)
        await loginPage.enter_url(testURL)
    })
   
    it("should not accept invalid username", async function () {
        await loginPage.enter_username("standard_user1")
        await loginPage.enter_password("secret_sauce")
        await loginPage.select_login() 

        const loginError = await loginPage.login_error()
        expect(loginError, 'incorrect login creds').to.exist
        //await new Promise(resolve => setTimeout(resolve, 10000))
    })

    it("should not accept invalid password", async function () {
        await loginPage.enter_username("standard_user")
        await loginPage.enter_password("secret_sauce1")
        await loginPage.select_login()

        const loginError = await loginPage.login_error()
        expect(loginError, 'incorrect login creds').to.exist
    })

    it("should login to Swag Labs site", async function () {
        await loginPage.enter_username("standard_user")
        await loginPage.enter_password("secret_sauce")
        await loginPage.select_login()

    })


    afterEach(async function () {
        if (loginPage) {
            await loginPage.close_browser()
        }
    })
 
})











// const {describe, it, afterEach, beforeEach} = require('mocha')
// const chai = require('chai')
// const chaiAsPromised = require('chai-as-promised')
// const LoginPage = require("../pageobjects/loginpage")
// const webdriver = require("selenium-webdriver")


// chai.use(chaiAsPromised)
// const expect = chai.expect

// const testURL = "https://www.saucedemo.com"

// //Login 
// describe("Login to Saucedemo", function() {
//     let loginPage
//     let driver

//     beforeEach(async function() {
//         driver = new webdriver.Builder().forBrowser("chrome").build()
//         loginPage = new LoginPage(driver)
//         await loginPage.enter_url(testURL)
//     })
   
//     it("should not accept invalid username", async function () {
//         await loginPage.enter_username("standard_user1")
//         await loginPage.enter_password("secret_sauce")
//         await loginPage.select_login() 

//         const loginError = await loginPage.login_error()
//         expect(loginError, 'incorrect login creds').to.exist
//         //await new Promise(resolve => setTimeout(resolve, 10000))
//     })

//     it("should not accept invalid password", async function () {
//         await loginPage.enter_username("standard_user")
//         await loginPage.enter_password("secret_sauce1")
//         await loginPage.select_login()

//         const loginError = await loginPage.login_error()
//         expect(loginError, 'incorrect login creds').to.exist
//     })

//     it("should login to Swag Labs site", async function () {
//         await loginPage.enter_username("standard_user")
//         await loginPage.enter_password("secret_sauce")
//         await loginPage.select_login()

//     })


//     afterEach(async function () {
//         if (loginPage) {
//             await loginPage.close_browser()
//         }
//     })
//  
// })







