//page that you can also use in other Project Pages

const { By } = require("selenium-webdriver")
const Locator = require("../pageLocators/loginPageLocators")
//driver.manage().setTimeouts({implicit: (10000)})


class BasePage {

    constructor(driver) {
        this.driver = driver
    }

    async go_to_url(testURL) {
        await this.driver.get(testURL)
    }

    async close_browser() {
        await this.driver.close()
    }
}

module.exports = BasePage









    // constructor(driverName = "chrome") {
    //     this.driver = new webdriver.Builder().forBrowser(driverName).build()
    // }


    // async enter_username(username) {
    //     await this.driver.findElement(Locator.usernameField).sendKeys(username)
    // }

    // async enter_password(password) {
    //     await this.driver.findElement(Locator.passwordField).sendKeys(password)
    // }

    // async select_login(loginButton) {
    //     await this.driver.findElement(Locator.loginButton).click()
    // }