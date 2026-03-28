const { remote } = require('webdriverio')
const NotepadPO = require('../apps/notepad_po')

describe('Notepad Tests', () => {
    let notepadSession
    let notepad

    beforeEach(async () => {
        const options = {
            platformName: 'Windows',
            'appium:automationName': 'Windows',
            'appium:deviceName': 'WindowsPC',
            'appium:app': 'C:\\Windows\\System32\\notepad.exe'
        }
        notepadSession = await remote({
            hostname: '127.0.0.1',
            port: 4723,
            capabilities: options
        })
        notepad = new NotepadPO(notepadSession)
    })

    afterEach(async () => {
        await notepadSession.deleteSession()
    })

    it('should create a note', async () => {
        const editor = notepad.textEditor()
        await editor.click()

        await editor.addValue('\uE009a')
        await editor.addValue('\uE017')

        await editor.setValue('Test Automation with WinAppDriver')
        let text = await editor.getText()
        expect(text).toBe('Test Automation with WinAppDriver')
        
        await editor.addValue('\uE009w')
        const cancelButton = notepad.dialogCancelButton()
        await cancelButton.waitForDisplayed({ timeout: 5000 })
        await cancelButton.click()
        
        text = await editor.getText()
        expect(text).toBe('Test Automation with WinAppDriver')
        
        await editor.addValue('\uE009w')
        const dontSaveButton = notepad.dialogDontSaveButton()
        await dontSaveButton.waitForDisplayed({ timeout: 5000 })
        await dontSaveButton.click()
    })
})