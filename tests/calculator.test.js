const { remote } = require('webdriverio')
const CalcPO = require('../apps/calc_po')

describe('Calculator Test', () => {
    let calcSession
    let calc

    beforeEach(async () => {
        const options = {
            platformName: 'Windows',
            'appium:automationName': 'Windows',
            'appium:deviceName': 'WindowsPC',
            'appium:app': 'Microsoft.WindowsCalculator_8wekyb3d8bbwe!App'
        }
        calcSession = await remote({
            hostname: '127.0.0.1',
            port: 4723,
            capabilities: options
        })
        calc = new CalcPO(calcSession);
    })

    afterEach(async () => {
        await calcSession.deleteSession();
    })

    it('test addition', async () => {
        await calc.getNumButton('1').click()
        await calc.getOperatorButton('plus').click()
        await calc.getNumButton('7').click()
        await calc.getOperatorButton('equal').click()
        const result = await calc.getDisplayResults()
        expect(result).toBe('8')
    })

    it('test subtraction', async () => {
        await calc.getNumButton('9').click()
        await calc.getOperatorButton('minus').click()
        await calc.getNumButton('1').click()
        await calc.getOperatorButton('equal').click()
        const result = await calc.getDisplayResults()
        expect(result).toBe('8')
    })

    it('test multiplication', async () => {
        await calc.getNumButton('8').click()
        await calc.getOperatorButton('multiply').click()
        await calc.getNumButton('4').click()
        await calc.getOperatorButton('equal').click()
        const result = await calc.getDisplayResults()
        expect(result).toBe('32')
    })

    it('test division', async () => {
        await calc.getNumButton('8').click()
        await calc.getOperatorButton('divide').click()
        await calc.getNumButton('4').click()
        await calc.getOperatorButton('equal').click()
        const result = await calc.getDisplayResults()
        expect(result).toBe('2')
    })
})