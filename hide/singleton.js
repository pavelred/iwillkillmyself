//export {Singleton};
const Singleton = new (async function() {
    const driver = await new Builder().forBrowser("firefox").build();
    return function() { return driver; };
})();


console.log(new Singleton() === new Singleton());