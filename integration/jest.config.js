module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.(test|spec)\\.js$',
    setupFiles: [
        "./jest.init.js"
    ],
}