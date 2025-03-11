
import { Given, When, Then, setDefaultTimeout, Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox } from "playwright";
import { expect } from "@playwright/test"
import dotenv from "dotenv"

setDefaultTimeout(1500 * 60 * 2)

let browser: Browser;
let bCtx: BrowserContext;
let page: Page;

BeforeAll(async function () {

    dotenv.config({
        path: `${process.cwd()}/config/.env.${process.env.npm_config_env}`
    });
    let browserType = process.env.browser;

    switch (browserType) {
        case 'chrome':
        case 'gc':
            browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
            break;
        case 'firefox':
        case 'ff':
            browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
        case 'edge':
        case 'msedge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
            break;
        default:
            throw new Error(`invalid browser type ${browserType} is passed..! pls correct it.`)
    }
})

Before(async function (scenario) {
    browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
    bCtx = await browser.newContext({ viewport: null });
    page = await bCtx.newPage();
    await page.goto(process.env.app_url!)
})

After(async function () {
    await page.close();
    await bCtx.close();
});

AfterAll(async function () {
    await browser.close();
})

export function getPage(): Page {
    return page;
}