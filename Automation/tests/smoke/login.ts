import { t } from "testcafe";
import { ValidUser, InvalidUsername, InvalidPassword, InvalidPasswordUsername } from "../helpers/roles_helper"

// page classes
import login_page from "../pages/login_page"

fixture`login smoke test`;

test.meta({
})("User attempts to log in with valid username and password", async (t) => {
    await t.useRole(ValidUser);
})

test.meta({
})("User attempts to log in with invalid username and valid password", async (t) => {
    await t.useRole(InvalidUsername);
})

test.meta({
})("User attempts to log in with valid username and invalid password", async (t) => {
    await t.useRole(InvalidPassword);
})

test.meta({
})("User attempts to log in with invalid username and invalid password", async (t) => {
    await t.useRole(InvalidPasswordUsername);
})

