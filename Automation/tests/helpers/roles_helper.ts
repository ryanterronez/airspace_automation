import { Selector, Role, t } from "testcafe";
import login_page from "../pages/login_page"

export const details = {
    login_url: "https://the-internet.herokuapp.com/login",
    logged_in_url: "https://the-internet.herokuapp.com/secure",
    username: "tomsmith",
    password: "SuperSecretPassword!"
};

export const ValidUser = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_success(details.username, details.password)
    },
    { preserveUrl: true }
);

export const InvalidUsername = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_fail_username("baduser", details.password)
    },
    { preserveUrl: true }
);

export const InvalidPassword = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_fail_password(details.username, "fakepassword")
    },
    { preserveUrl: true }
);

export const InvalidPasswordUsername = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_fail_password_username("baduser", "fakepassword")
    },
    { preserveUrl: true }
);

