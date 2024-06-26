module.exports = { 
    testConcurrency: 1,
    apiKey: 'APPLITOOLS_API_KEY',
    batchName: 'TAU Todo App',
    browser: [
        { width: 800, height: 600, name: 'chrome' },
        {deviceName: 'iPhone X', screenOrientation: 'portrait'}
    ]
}