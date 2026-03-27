class NotepadPO {
    constructor(driver) {
        this.driver = driver
    }

    minimizeButton() {
        return this.driver.$('//*[@Name="Minimizar"]')
    }

    maximizeButton() {
        return this.driver.$('//*[@Name="Maximizar"]')
    }

    closeButton() {
        return this.driver.$('//*[@Name="Fechar"]')
    }

    menuFile() {
        return this.driver.$('~File')
    }

    menuEdit() {
        return this.driver.$('~Edit')
    }

    menuView() {
        return this.driver.$('~View')
    }

    textEditor() {
        return this.driver.$('//*[@Name="Editor de texto"]')
    }

    dialogSaveButton() {
        return this.driver.$('//*[@Name="Salvar"]')
    }

    dialogDontSaveButton() {
        return this.driver.$('//*[@Name="Não salvar"]')
    }

    dialogCancelButton() {
        return this.driver.$('//*[@Name="Cancelar"]')
    }
}

module.exports = NotepadPO