const { By } = require("selenium-webdriver")

module.exports = {
    burgerMenu: By.xpath("//button[@id='react-burger-menu-btn']"),
    allItemBtn: By.xpath("//a[@id='inventory_sidebar_link']"),
    aboutBtn: By.xpath("//a[@id='about_sidebar_link']"),
    logoutBtn: By.xpath("//a[@id='logout_sidebar_link']"),
    resetStateBtn: By.xpath("//a[@id='reset_sidebar_link']"),
    closeBurgerBtn: By.xpath("//button[@id='react-burger-cross-btn']")

}