export default class SplashPage {
    get locationAccess() {
        return $('//android.widget.TextView[@text="Continue"]')
    }

    async verifyLocationAccess(){
        await this.locationAccess.click();

    }
}