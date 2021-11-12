import { t } from "testcafe";
import { ValidUser,
        InvalidUsername,
        InvalidPassword,
        InvalidPasswordUsername,
        details } from "../helpers/roles_helper"
import { Environment, Feature, TestType } from "../helpers/enums/enums"

// page classes
import login_page from "../pages/login_page"

fixture`login smoke test`;

test.meta({
    environment: Environment.Production,
    feature: Feature.Login,
    type: TestType.Smoke,
})("Validate login page", async (t) => {
    await t.navigateTo(details.login_url);
    await login_page.validate_login_page();
})

test.meta({
    environment: Environment.Production,
    feature: Feature.Login,
    type: TestType.Smoke,
})("User attempts to log in with valid username and password", async (t) => {
    await t.useRole(ValidUser);
    await t.expect(login_page.secure_page.login_success_sub_header.exists).ok("Sub header missing")
    await t.expect(login_page.secure_page.secure_area_header.exists).ok("Header missing")
})

test.meta({
    environment: Environment.Production,
    feature: Feature.Login,
    type: TestType.Smoke,
})("User attempts to log in with invalid username and valid password", async (t) => {
    await t.useRole(InvalidUsername);
})

test.meta({
    environment: Environment.Production,
    feature: Feature.Login,
    type: TestType.Smoke,
})("User attempts to log in with valid username and invalid password", async (t) => {
    await t.useRole(InvalidPassword);
})

test.meta({
    environment: Environment.Production,
    feature: Feature.Login,
    type: TestType.Smoke,
})("User attempts to log in with invalid username and invalid password", async (t) => {
    await t.useRole(InvalidPasswordUsername);
})

test.meta({
    environment: Environment.Production,
    feature: Feature.Login,
    type: TestType.Smoke,
})("User attempts to navigate to /secure without submitting credentials", async (t) => {
    await t.navigateTo(details.login_url);
    await t.navigateTo(details.logged_in_url);
    await t.expect(login_page.must_login_banner.exists).ok("Must login banner missing")
})

test.meta({
    environment: Environment.Production,
    feature: Feature.Logout,
    type: TestType.Smoke,
})("User attempts to logout", async (t) => {
    await t.useRole(ValidUser);
    await t.click(login_page.secure_page.logout_button);
    await login_page.validate_login_page();
    await t.expect(login_page.logout_banner.exists).ok("Loggout banner missing")
})
