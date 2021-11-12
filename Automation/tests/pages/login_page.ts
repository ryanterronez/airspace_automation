import { Selector, t } from "testcafe"
import SecurePage from "./secure_page"

class LoginPage {
    pre_login_header: Selector;
    pre_login_sub_header: Selector;
    login_form: Selector;
    username_field: Selector;
    password_field: Selector;
    login_button: Selector;
    logout_banner: Selector;
    login_failed_banner_username: Selector;
    login_failed_banner_password: Selector;
    must_login_banner: Selector;
    secure_page: SecurePage;

    constructor() {
        this.pre_login_header = Selector("h2").withText("Login Page");
        this.pre_login_sub_header = Selector("h4.subheader").withText("This is where you can log in");
        this.login_form = Selector("form#login");
        this.username_field = Selector("input#username");
        this.password_field = Selector("input#password");
        this.login_button = this.login_form.find("button[type='submit']");
        this.logout_banner = Selector("div#flash").withText("You logged out of the secure area");
        this.login_failed_banner_username = Selector("div#flash.error").withText("Your username is invalid");
        this.login_failed_banner_password = Selector("div#flash.error").withText("Your password is invalid");
        this.must_login_banner = Selector("div#flash.error").withText("You must login to view the secure area");
        this.secure_page = new SecurePage();
    }

    async validate_login_page() {
        await t.expect(this.pre_login_header.exists).ok("Login page header does not exist");
        await t.expect(this.pre_login_sub_header.exists).ok("Login page sub header does not exist");
        await t.expect(this.username_field.exists).ok("Username field does not exist");
        await t.expect(this.password_field.exists).ok("Username field does not exist");
        await t.expect(this.login_button.exists).ok("Login button does not exist");
    }

    /**
    attemps to login user
    * @param {string} username
    * @param {string} password
    * @param {Selector} expected_banner
    * @param {Selector} unexpected_banner
     */
    async login(username: string, password: string, expected_banner: Selector, unexpected_banner?: Selector) {
        await t.expect(this.login_form.exists).ok("Login form does not exist");
        await t.typeText(this.username_field, username);
        await t.typeText(this.password_field, password);
        await t.click(this.login_button);
        if (unexpected_banner) {
            await t.expect(unexpected_banner.exists).notOk(`${unexpected_banner} shoud not be present`);
        }
        await t.expect(expected_banner.exists).ok(`${expected_banner} not present`);
    }

    async login_success(username: string, password: string) {
        await this.login(username, password, this.secure_page.login_success_banner);
    }

    async login_fail_username(username: string, password: string) {
        await this.login(username, password, this.login_failed_banner_username, this.secure_page.login_success_banner);
    }

    async login_fail_password(username: string, password: string) {
        await this.login(username, password, this.login_failed_banner_password, this.secure_page.login_success_banner);
    }

    async login_fail_password_username(username: string, password: string) {
        await this.login(username, password, this.login_failed_banner_username, this.secure_page.login_success_banner);
    }
}

export default new LoginPage();