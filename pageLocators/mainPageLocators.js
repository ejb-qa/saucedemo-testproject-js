const { By } = require("selenium-webdriver")

module.exports = {
    burgerMenuPath: By.xpath("//button[@id='react-burger-menu-btn']"),

    item1: By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"),
    item2: By.xpath("//button[@id='add-to-cart-sauce-labs-bike-light']"),
    item3: By.xpath("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']"),
    item4: By.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']"),

    removeButton1: By.xpath("//button[@id='remove-sauce-labs-backpack']"),
    removeButton2: By.xpath("//button[@id='remove-sauce-labs-bike-light']"),
    removeButton3: By.xpath("//button[@id='remove-sauce-labs-bolt-t-shirt']"),
    removeButton4: By.xpath("//button[@id='remove-sauce-labs-fleece-jacket']")

}