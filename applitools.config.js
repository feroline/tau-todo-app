require('dotenv').config()

module.exports = {
    testConcurrency: 1,
    apiKey: process.env.APPLITOOLS_API_KEY,
    batchName: 'TAU Todo App',
    browser: [
        {width: 800, height: 600, name: 'chrome'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ]
}