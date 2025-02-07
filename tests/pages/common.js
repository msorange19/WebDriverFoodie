export default class CommonPage {
    get breadCrumbBtn(){
        return $('com.horcrux.svg.k0')
    }

    async verifyBreadCrumb(){
        await this.breadCrumbBtn.click();
        await this.breadCrumbBtn.saveScreenshot('tests/screenshot/breadcrumb_element.png');

    }

}