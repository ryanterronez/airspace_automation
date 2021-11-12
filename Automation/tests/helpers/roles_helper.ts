import { Selector, Role, t } from "testcafe";
import login_page from "../pages/login_page"

const details = {
    login_url: "https://the-internet.herokuapp.com/login",
    password: "SuperSecretPassword!"
};

export const ValidUser = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_success("tomsmith", details.password)
    },
    { preserveUrl: true }
);

export const InvalidUsername = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_fail_username("noaccess", details.password)
    },
    { preserveUrl: true }
);

export const InvalidPassword = Role (
    `${details.login_url}`,
    async (t) => {
        await login_page.login_fail_password("tomsmith", "fakepassword")
    },
    { preserveUrl: true }
);

