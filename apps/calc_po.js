const { remote } = require('webdriverio')

class CalcPO {
    constructor(driver) {
        this.driver = driver
    }

    getNumButton(num) {
        return this.driver.$(`~num${num}Button`)
    }

    getOperatorButton(operator) {
        return this.driver.$(`~${operator}Button`)
    }

    async getDisplayResults() {
        const element = this.driver.$(`~CalculatorResults`)
        let text = await element.getText()
        text = text.trim().replace(/A exibição é/g, '').trim()
        return text
    }
}

module.exports = CalcPO