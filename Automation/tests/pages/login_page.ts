import { Selector, t } from "testcafe"

class LoginPage {
    pre_login_header: Selector;
    pre_login_sub_header: Selector;
    login_form: Selector;
    username_field: Selector;
    password_field: Selector;
    login_button: Selector;
    login_success_banner: Selector;
    login_success_sub_header: Selector;
    logout_button: Selector;
    secure_area_header: Selector;
    logout_banner: Selector;
    login_failed_banner_username: Selector;
    login_failed_banner_password: Selector;

    constructor() {
        this.pre_login_header = Selector("h2").withText("Login Page");
        this.pre_login_sub_header = Selector("h4.subheader").withText("This is where you can log in");
        this.login_form = Selector("form#login");
        this.username_field = Selector("input#username");
        this.password_field = Selector("input#password");
        this.login_button = this.login_form.find("button[type='submit']");
        this.login_success_banner = Selector("div#flash").withText("You logged into a secure area");
        this.login_success_sub_header = Selector("h4.subheader").withText("Welcome to the Secure Area");
        this.logout_button = Selector("a.button[href='/logout']");
        this.secure_area_header = Selector("h2").withText("Secure Area");
        this.logout_banner = Selector("div#flash").withText("You logged out of the secure area");
        this.login_failed_banner_username = Selector("div#flash").withText("Your username is invalid")
        this.login_failed_banner_password = Selector("div#flash").withText("Your password is invalid")
    }

    async login_success(username: string, password: string) {
        await t.expect(this.login_form.exists).ok("Login form does not exist");
        await t.typeText(this.username_field, username);
        await t.typeText(this.password_field, password);
        await t.click(this.login_button);
        await t.expect(this.login_success_banner.exists).ok("Login success banner not present");
    }

    async login_fail_username(username: string, password: string) {
        await t.expect(this.login_form.exists).ok("Login form does not exist");
        await t.typeText(this.username_field, username);
        await t.typeText(this.password_field, password);
        await t.click(this.login_button);
        await t.expect(this.login_success_banner.exists).notOk("Login success banner should not be present");
        await t.expect(this.login_failed_banner_username.exists).ok("Login failed (username) banner not present")
    }

    async login_fail_password(username: string, password: string) {
        await t.expect(this.login_form.exists).ok("Login form does not exist");
        await t.typeText(this.username_field, username);
        await t.typeText(this.password_field, password);
        await t.click(this.login_button);
        await t.expect(this.login_success_banner.exists).notOk("Login success banner should not be present");
        await t.expect(this.login_failed_banner_password.exists).ok("Login failed (password) banner not present")
    }


}

export default new LoginPage();