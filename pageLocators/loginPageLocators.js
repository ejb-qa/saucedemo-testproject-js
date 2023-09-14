//const webdriver = require("selenium-webdriver")
const { By } = require("selenium-webdriver")

module.exports = {
    usernameField: By.xpath("//input[@id='user-name']"),
    passwordField: By.xpath("//input[@id='password']"),
    loginButton: By.xpath("//input[@id='login-button']"),
    loginErrorPath: By.xpath("//button[@class='error-button']")
}