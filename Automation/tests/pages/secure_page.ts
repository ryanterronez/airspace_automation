import { Selector, t } from "testcafe"

export default class SecurePage {
    login_success_banner: Selector;
    login_success_sub_header: Selector;
    logout_button: Selector;
    secure_area_header: Selector;

    constructor() {
        this.login_success_banner = Selector("div#flash.success").withText("You logged into a secure area");
        this.login_success_sub_header = Selector("h4.subheader").withText("Welcome to the Secure Area");
        this.logout_button = Selector("a.button[href='/logout']");
        this.secure_area_header = Selector("h2").withText("Secure Area");
    }
}