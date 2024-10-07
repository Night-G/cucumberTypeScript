import { Given, When, Then } from "@cucumber/cucumber";

Given('User goes to Login page', async function () {
    await this.page.locator("//span[text()='Login']").click();
});

Given('User enters username as {string}', async function (username: string) {
    await this.page.locator("//input[@id='userName']").fill(username);
});

Given('User enters password as {string}', async function (pwd: string) {
    await this.page.locator("//input[@id='password']").fill(pwd);
});

When('User clicks on the login button', async function () {
    await this.page.locator("//button[@id='login']").click();
});

Then('Login should be successful', async function () {
    const userNameLabel = await this.page.locator("//label[@id='userName-value']").textContent();
    console.log("Username: " + userNameLabel);
});
