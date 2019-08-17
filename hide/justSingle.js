const {Builder, By, Key, until} = require("selenium-webdriver");
let driver;
function drvr() {
    if (driver == null) {
        driver = new Builder().forBrowser("firefox").build();
    }
    return driver;
}
async function example() {
    driver = drvr();
    await driver.get("http://bbc.com");
    await driver.findElement(By.name("q")).sendKeys("Google", Key.RETURN);

}
example();
console.log(new drvr() === new drvr());

