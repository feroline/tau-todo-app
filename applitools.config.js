module.exports = {
    testConcurrency: 1,
    //TODO:UTILIZAR .env PARA ADICIONAR A KEY DE AUTORIZAÇÃO CORRETA E REFERENCIAR AQUI, ESSA KEY É FALSA. 
    apiKey: 'bMlMH2PIaVafpCzu0sBr0Ypg6eOAtSn11HRfzsbIbbo110',
    batchName: 'TAU Todo App',
    browser: [
        {width: 800, height: 600, name: 'chrome'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ]
}