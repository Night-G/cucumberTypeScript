import {Given} from "cucumber";
import {Browser, chromium, Page} from "playwright";


let browser: Browser;
let page: Page;

Given(/^User goes to the site`s main page$/,  async function () {
    browser = await chromium.launch({headless: true});
    page = await browser.newPage();
    await page.goto('https://demoqa.com/');
});

Given ("User goes to Book Store Application Page", async function () {
    await page.locator("//h5[text()='Book Store Application']").click();
});