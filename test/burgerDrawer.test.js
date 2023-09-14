const { describe, it, after, before } = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const LoginPage = require("../pageobjects/loginpage")
const BurgerDrawer = require("../pageobjects/burgerDrawer")
const openBrowser = require('../utils/driver.utils')


chai.use(chaiAsPromised)
const expect = chai.expect

const testURL = "https://www.saucedemo.com"


describe("Checks if Burger Drawer buttons exist", function () {
    let loginPage
    let burgerDrawer

    before(async function () {
        driver = openBrowser()
        loginPage = new LoginPage(driver)
        await loginPage.enter_url(testURL)
        await loginPage.enter_username("standard_user")
        await loginPage.enter_password("secret_sauce")
        await loginPage.select_login()
        burgerDrawer = new BurgerDrawer(driver)
    })

    it("should check if Burger icon is displayed", async function () {
        const burgerMenu = await burgerDrawer.getBurgerMenu()
        expect(burgerMenu, 'burger menu is not displayed').to.exist
    })

    it("should select burger icon", async function () {
        await burgerDrawer.selectBurgerMenu()
    })

    it("should check if All Item button is displayed", async function () {
        const allItemBtn = await burgerDrawer.getAllItemBtn()
        expect(allItemBtn, 'all item button is not displayed').to.exist
    })

    it("should select About button and go to saucelabs site", async function () {
        await burgerDrawer.selectAboutBtn()
        const sauceLabsTitle = await driver.getTitle()

        expectedSauceLabsTitle = "Sauce Labs: Cross Browser Testing, Selenium Testing & Mobile Testing"
        expect(sauceLabsTitle).to.equal(expectedSauceLabsTitle,
            "Unable to open Sauce Labs site")

        await driver.navigate().back()
    })

    it("should check if Logout button is displayed", async function () {
        const logoutBtn = await burgerDrawer.getLogoutBtn()
        expect(logoutBtn, 'logout button is not displayed').to.exist
    })

    it("should check if Reset State button is displayed", async function () {
        const resetStateBtn = await burgerDrawer.getResetStateBtn()
        expect(resetStateBtn, 'reset state button is not displayed').to.exist
    })

    it("should close Burger Drawer", async function () {
        const closeBurgerBtn = await burgerDrawer.selectCloseBurgerBtn()
        expect(closeBurgerBtn, 'close button is not displayed').to.exist
    })




    after(async function () {
        if (driver) {
            await burgerDrawer.close_browser()
        }
    })
})