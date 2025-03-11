import { Page } from "playwright"

export default class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(object: any, roleFlag=false) {
        if(!roleFlag){
            await this.getLocator(object).click(object["actionOptions"]);
        } else {
            await this.getLocatorByRole(object).click(object["actionOptions"]);
        }
        console.log(`clicked on ${object["description"]}`)
    }

    async enter(object: any, data: string) {
        await this.getLocator(object).fill(data, object["actOptions"]);
        console.log(`entered value ${data} on ${object["description"]}`)
    }

    async check() {

    }

    async select() {

    }

    getLocator(object:any){
        return this.page.locator(object["locator"], object["locatorOptions"])
    }

    getLocatorByRole(object:any){
        const element = object["locator"] as "alert" | "alertdialog" | "application" | "article" | "banner" | "blockquote" | "button"| "caption" | "cell" | "superscript" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term"
        return this.page.getByRole(element, object["locatorOptions"]);
    }

}