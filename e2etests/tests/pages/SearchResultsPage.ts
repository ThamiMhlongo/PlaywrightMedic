import { Page } from "playwright"
//import * as loginPageLoc from "../locators/loginpageloc.json"
import * as searchPageLoc from "../locators/HomeSearchPageLoc.json"
import BasePage from "./BasePage"
//import dotenv from "dotenv"

export default class SearchResultsPage extends BasePage{

    readonly firstSearchResult = this.page.locator('.list-generic.search-result-list ul > li:nth-child(1)')

    constructor(page: Page) {
        super(page)
    }

    async acceptCookies() {
        await this.click(searchPageLoc.cookiesAcceptButton);
    }

    async gotoHeaderSearch() {
        await this.click(searchPageLoc.searchTopRightIcon);
    }

    async search() {
        await this.enter(searchPageLoc.searchInput, process.env.search_value!);
    }

    async enterSearchTerm(searchTerm: string) {
        await this.enter(searchPageLoc.searchInput, searchTerm);
    }

    async searchOnHeader() {
        await this.enter(searchPageLoc.searchInputHeader, process.env.search_value!);
    }

    async submitSearch() {
        await this.click(searchPageLoc.searchSubmitButton)
    }

    async submitHeaderSearch() {
        await this.click(searchPageLoc.searchSubmitButtonHeader)
    }

    async getFirstSearchResultText() {
        //this doesn't work
        return this.firstSearchResult.textContent();
    }

}