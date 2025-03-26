import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { getPage } from "../../codelib/CoreLib.spec";
import SearchPage from "../pages/SearchResultsPage";
import HomePage from "../pages/HomePage"

let searchPage:SearchPage;
let homePage:HomePage;

Given('I am on home page and accept cookies', async function () {
    homePage = new HomePage(getPage())
    await homePage.acceptCookies()
});

Given('I fill the search input with the {string} term on the Search Engine page', async function (searchTerm:string) {
    await homePage.enterSearchTerm(searchTerm);
})

Then('I navigates to header search', async function () {
    await homePage.gotoHeaderSearch()
});

Then('I navigate to doctors page', async function () {
    await homePage.gotoDoctorsPage()
});

// Then('User enter search value on header search', async function () {
//     await searchPage.searchOnHeader()
// });

When('I click on the search button on the Search Engine page', async function () {
    await homePage.submitSearch()
});

// Then('User submit header search', async function () {
//     await searchPage.submitHeaderSearch()
// });

// Then('the text {string} should be visible on the result page on the Search Engine page', async function (expectedText: string) {
//     const firstResultText = await searchPage.getFirstSearchResultText();
//     console.log("first results : ", firstResultText?.toLowerCase());
//     console.log("expected results : ", expectedText.toLowerCase())
//     expect(firstResultText?.toLowerCase()).toContain(expectedText.toLowerCase())
// });