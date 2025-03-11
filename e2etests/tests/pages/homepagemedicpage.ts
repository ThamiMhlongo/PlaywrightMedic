import { Page } from "playwright"
//import * as loginPageLoc from "../locators/loginpageloc.json"
import * as homeMedicPageLoc from "../locators/homepagemedicloc.json"
import BasePage from "./basepage"
//import dotenv from "dotenv"

export default class HomeMedicPage extends BasePage{

    constructor(page: Page) {
        super(page)
    }

    async acceptCookies() {
        await this.click(homeMedicPageLoc.cookiesAcceptButton);
    }

    async gotoHeaderSearch() {
        await this.click(homeMedicPageLoc.searchTopRightIcon);
    }

    async search() {
        await this.enter(homeMedicPageLoc.searchInput, process.env.search_value!);
    }

    async searchOnHeader() {
        await this.enter(homeMedicPageLoc.searchInputHeader, process.env.search_value!);
    }

    async submitSearch() {
        await this.click(homeMedicPageLoc.searchSubmitButton)
    }

    async submitHeaderSearch() {
        await this.click(homeMedicPageLoc.searchSubmitButtonHeader)
    }

    async verifySearchResults() {
        // change to verify if elements are visible, not click
        await this.click(homeMedicPageLoc.searchResultFilterList);
        await this.click(homeMedicPageLoc.firstSearchResult);
    }

}