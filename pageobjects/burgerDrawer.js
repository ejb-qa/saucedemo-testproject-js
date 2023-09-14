const { until } = require("selenium-webdriver")
//const webdriver = require("selenium-webdriver")
const { elementIsVisible } = require("selenium-webdriver/lib/until")
const BasePage = require("./basepage")
const Locator = require("../pageLocators/burgerDrawerLocators")


class BurgerDrawer extends BasePage {

    async getBurgerMenu() {
        const burgerMenu = this.driver.findElement(Locator.burgerMenu)
        await this.driver.wait(until.elementIsVisible(burgerMenu, 10000))
        return burgerMenu
    }

    async selectBurgerMenu() {
        const burgerMenu = this.driver.findElement(Locator.burgerMenu)
        await this.driver.wait(until.elementIsVisible(burgerMenu, 10000))
        await burgerMenu.click()
    }

    async getAllItemBtn() {
        const allItemBtn = this.driver.findElement(Locator.allItemBtn)
        await this.driver.wait(until.elementIsVisible(allItemBtn, 10000))
        return allItemBtn
    }

    async selectAboutBtn() {
        const aboutBtn = this.driver.findElement(Locator.aboutBtn)
        await this.driver.wait(until.elementIsVisible(aboutBtn, 10000))
        await aboutBtn.click()
    }

    async getLogoutBtn() {
        const logoutBtn = this.driver.findElement(Locator.logoutBtn)
        await this.driver.wait(until.elementIsVisible(logoutBtn, 10000))
        return logoutBtn
    }

    async getResetStateBtn() {
        const resetStateBtn = this.driver.findElement(Locator.resetStateBtn)
        await this.driver.wait(until.elementIsVisible(resetStateBtn, 10000))
        return resetStateBtn
    }

    async selectCloseBurgerBtn() {
        const closeBurgerBtn = this.driver.findElement(Locator.closeBurgerBtn)
        await this.driver.wait(until.elementIsVisible(closeBurgerBtn, 10000))
        return closeBurgerBtn
    }


}

module.exports = BurgerDrawer