const {Builder, By, Key, until} = require("selenium-webdriver");
let driver;
function drvr() {
    if (driver == null) {
        driver = new Builder().forBrowser("chrome").build();
    }
    return driver;
}
async function example() {
    driver = drvr();
    try {
        console.log('я начал выполнять тесты мастер...')
        console.log('я открываю сайт');
        await driver.get("http://bbc.com");
        console.log('ввожу в поиск текст');
        await driver.findElement(By.name("q")).sendKeys("Google");
        console.log('кликаю на первый элемент навигации');
        await driver.findElement(By.css(".orb-nav .orb-nav-newsdotcom")).click();
        console.log('поиск отображается: ' + await driver.findElement(By.name('q')).isDisplayed());
    } catch (err) {
        // обработка ошибки
        console.log('кажется с неба упала звезда или твой код...');
    }
    await driver.quit();
}
example();

console.log('синглтон:  ' + (new drvr() === new drvr()));

