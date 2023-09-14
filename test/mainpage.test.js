const { describe, it, after, before } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const LoginPage = require("../pageobjects/loginpage")
const MainPage = require("../pageobjects/mainpage")
const openBrowser = require('../utils/driver.utils')


chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "https://www.saucedemo.com"


describe("Add Products from Main Page", function () {
    let loginPage
    let mainPage

    before(async function () {
        driver = openBrowser()
        loginPage = new LoginPage(driver)
        await loginPage.enter_url(testURL)
        await loginPage.enter_username("standard_user")
        await loginPage.enter_password("secret_sauce")
        await loginPage.select_login()
        mainPage = new MainPage(driver)
    })

    it("should verify that user is in mainpage", async function () {
        const driverTitle = await driver.getTitle()
        expect(driverTitle).to.equal("Swag Labs", "Error in Login")

    })

    it("should add item 1 to cart", async function () {
        await mainPage.selectItem1()
        const removeButton1 = await mainPage.getRemoveButton1()
        expect(removeButton1, 'item 1 not selected').to.exist
    })

    it("should add item 2 to cart", async function () {
        await mainPage.selectItem2()
        const removeButton2 = await mainPage.getRemoveButton2()
        expect(removeButton2, 'item 1 not selected').to.exist
    })

    it("should add item 3 to cart", async function () {
        await mainPage.selectItem3()
        const removeButton3 = await mainPage.getRemoveButton3()
        expect(removeButton3, 'item 1 not selected').to.exist
    })

    it("should add item 4 to cart", async function () {
        await mainPage.selectItem4()
        const removeButton4 = await mainPage.getRemoveButton4()
        expect(removeButton4, 'item 1 not selected').to.exist
    })

    after(async function () {
        if (driver) {   //to check that driver exists before closing
            await mainPage.close_browser()
        }
    })

})




