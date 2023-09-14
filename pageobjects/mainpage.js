
const { By, until } = require("selenium-webdriver")
const webdriver = require("selenium-webdriver")
const { elementIsVisible } = require("selenium-webdriver/lib/until")
const LoginPage = require("./loginpage")
const BasePage = require("./basepage")
const Locator = require("../pageLocators/mainPageLocators")


//let driver = new webdriver.Builder().forBrowser("chrome").build()

class MainPage extends BasePage {

    async selectItem1() {
        const item1 = this.driver.findElement(Locator.item1)
        await this.driver.wait(until.elementIsVisible(item1, 10000))
        await item1.click()
    }

    async getRemoveButton1() {
        const removeButton1 = this.driver.findElement(Locator.removeButton1)
        await this.driver.wait(until.elementIsVisible(removeButton1, 10000))
        return removeButton1
    }

    async selectItem2() {
        const item2 = this.driver.findElement(Locator.item2)
        await this.driver.wait(until.elementIsVisible(item2, 10000))
        await item2.click()
    }

    async getRemoveButton2() {
        const removeButton2 = this.driver.findElement(Locator.removeButton2)
        await this.driver.wait(until.elementIsVisible(removeButton2, 10000))
        return removeButton2
    }

    async selectItem3() {
        const item3 = this.driver.findElement(Locator.item3)
        await this.driver.wait(until.elementIsVisible(item3, 10000))
        await item3.click()
    }

    async getRemoveButton3() {
        const removeButton3 = this.driver.findElement(Locator.removeButton3)
        await this.driver.wait(until.elementIsVisible(removeButton3, 10000))
        return removeButton3
    }

    async selectItem4() {
        const item4 = this.driver.findElement(Locator.item4)
        await this.driver.wait(until.elementIsVisible(item4, 10000))
        await item4.click()
    }

    async getRemoveButton4() {
        const removeButton4 = this.driver.findElement(Locator.removeButton4)
        await this.driver.wait(until.elementIsVisible(removeButton4, 10000))
        return removeButton4
    }

}

module.exports = MainPage