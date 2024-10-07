
import {Page, Browser} from "playwright";
import {Given, When,Then} from "@cucumber/cucumber";

let browser: Browser;
let page: Page;


Given('User goes to Login page', async function () {
    await page.locator("//span[text()='Login']").click();
});


Given('User enters username as {string}', async function (username:string) {
    //await page.locator("//input[@id='userName']").type(username);
    await page.locator("//input[@id='userName']").fill(username);
});


Given('User enters password as {string}', async function (pwd:string) {
    await page.locator("//input[@id='password']").fill(pwd);
});


When('User click on the login button', async function () {
    await page.locator("//button[@id='login']").click();
});


Then('Login should be successful', async function (username:string) {
    const userNameLabel = await page.locator("//label[text()='"+username+"']").textContent();
    console.log("username: "+userNameLabel);

    await browser.close();
});
