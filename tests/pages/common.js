export default class CommonPage {
    get accountBtn() {
        return $('//android.widget.TextView[@text="Account"]')
    }

    async verifyBreadCrumb() {
        await this.accountBtn.click();
        await this.accountBtn.saveScreenshot('tests/screenshot/breadcrumb_element.png');

    }

}

export function randomSelections(randomSelector) {
    return Math.floor(Math.random() * randomSelector)
}