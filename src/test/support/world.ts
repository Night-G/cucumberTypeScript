import { setWorldConstructor } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

export class CustomWorld {
    browser!: Browser;
    page!: Page;

    async launchBrowser() {
        this.browser = await chromium.launch({ headless: true });
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
