import { Page } from "playwright"
//import * as loginPageLoc from "../locators/loginpageloc.json"
import * as doctorsSearchPageLoc from "../locators/DoctorsSearchPageLoc.json"
import BasePage from "./BasePage"
//import dotenv from "dotenv"

export default class DoctorsSearchPage extends BasePage{

    readonly firstSearchResult = this.page.locator('ul.doctor-badges > li:nth-child(1) h3')

    constructor(page: Page) {
        super(page)
    }

    // async acceptCookies() {
    //     await this.click(searchPageLoc.cookiesAcceptButton);
    // }

    // async gotoHeaderSearch() {
    //     await this.click(searchPageLoc.searchTopRightIcon);
    // }

    // async search() {
    //     await this.enter(searchPageLoc.searchInput, process.env.search_value!);
    // }

    async enterSearchTerm(searchTerm: string) {
        await this.enter(doctorsSearchPageLoc.doctorsSearchInput, searchTerm);
    }

    // async searchOnHeader() {
    //     await this.enter(searchPageLoc.searchInputHeader, process.env.search_value!);
    // }

    async submitSearch() {
        await this.click(doctorsSearchPageLoc.doctorSearchSubmitButton)
    }

    // async submitHeaderSearch() {
    //     await this.click(searchPageLoc.searchSubmitButtonHeader)
    // }

    async getFirstDoctorSearchResult() {
        //this doesn't work
        return this.firstSearchResult.textContent();
    }

}