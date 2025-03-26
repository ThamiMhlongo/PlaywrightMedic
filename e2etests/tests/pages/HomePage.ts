import { Page } from "playwright"
//import * as loginPageLoc from "../locators/loginpageloc.json"
import * as homeSearchPageLoc from "../locators/HomeSearchPageLoc.json"
import BasePage from "./BasePage"
//import dotenv from "dotenv"

export default class HomeMedicPage extends BasePage{

    readonly firstSearchResult = this.page.locator('.list-generic.search-result-list ul > li:nth-child(1)')

    constructor(page: Page) {
        super(page)
    }

    async acceptCookies() {
        await this.click(homeSearchPageLoc.cookiesAcceptButton);
    }

    async gotoHeaderSearch() {
        await this.click(homeSearchPageLoc.searchTopRightIcon);
    }

    async gotoDoctorsPage() {
        await this.click(homeSearchPageLoc.doctorsMenuItem);
    }

    async search() {
        await this.enter(homeSearchPageLoc.searchInput, process.env.search_value!);
    }

    async enterSearchTerm(searchTerm: string) {
        await this.enter(homeSearchPageLoc.searchInput, searchTerm);
    }

    async enterDoctorSearchTerm(searchTerm: string) {
        await this.enter(homeSearchPageLoc.searchInput, searchTerm);
    }

    async searchOnHeader() {
        await this.enter(homeSearchPageLoc.searchInputHeader, process.env.search_value!);
    }

    async submitSearch() {
        await this.click(homeSearchPageLoc.searchSubmitButton)
    }

    async submitHeaderSearch() {
        await this.click(homeSearchPageLoc.searchSubmitButtonHeader)
    }

    async getFirstSearchResultText() {
        //this doesn't work
        return this.firstSearchResult.textContent();
    }

}