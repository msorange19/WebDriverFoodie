export default class CommonPage {
    get breadCrumbBtn(){
        return $('com.horcrux.svg.i0')
    }



    async verifyBreadCrumb(){
        await this.breadCrumbBtn.click();
        await this.breadCrumbBtn.saveScreenshot('tests/screenshot/breadcrumb_element.png');

    }





}
export function randomSelections(randomSelector)
{
    return  Math.floor(Math.random() * randomSelector)
}