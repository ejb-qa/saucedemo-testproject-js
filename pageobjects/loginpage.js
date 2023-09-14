//Login Page Object

const { By } = require("selenium-webdriver")
const BasePage = require("./basepage")
const Locator = require("../pageLocators/loginPageLocators")

class LoginPage extends BasePage {

    async enter_url(testURL) {
        await this.go_to_url(testURL)
    }

    async enter_username(username) {
        await this.driver.findElement(Locator.usernameField).sendKeys(username)
    }

    async enter_password(password) {
        await this.driver.findElement(Locator.passwordField).sendKeys(password)
    }

    async select_login(loginButton) {
        await this.driver.findElement(Locator.loginButton).click()
    }

    async login_error() {
        const loginError = await this.driver.findElement(Locator.loginErrorPath)
        return loginError

    }

}


module.exports = LoginPage
