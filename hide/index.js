const {Builder, By, Key, until} = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://bbc.com");
    await driver.findElement(By.name("q")).sendKeys("Google", Key.RETURN);

}
example();
