import { Given } from "@cucumber/cucumber";

Given(/^User goes to the site's main page$/, async function () {
    await this.page.goto('https://demoqa.com/');
});

Given("User goes to Book Store Application Page", async function () {
    await this.page.locator("//h5[text()='Book Store Application']").click();
});
