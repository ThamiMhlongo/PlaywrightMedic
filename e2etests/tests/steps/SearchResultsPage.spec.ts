import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { getPage } from "../../codelib/CoreLib.spec";
import SearchPage from "../pages/SearchResultsPage";

let searchPage:SearchPage;

// Given('User is on home page and accept cookies', async function () {
//     searchPage = new SearchPage(getPage())
//     await searchPage.acceptCookies()
// });

// Given('I fill the search input with the {string} term on the Search Engine page', async function (searchTerm:string) {
//     await searchPage.enterSearchTerm(searchTerm);
// })

// Then('User navigates to header search', async function () {
//     await searchPage.gotoHeaderSearch()
// });

// Then('User enter search value on header search', async function () {
//     searchPage = new SearchPage(getPage())
//     await searchPage.searchOnHeader()
// });

// When('I click on the search button on the Search Engine page', async function () {
//     await searchPage.submitSearch()
// });

// Then('User submit header search', async function () {
//     await searchPage.submitHeaderSearch()
// });

Then('the text {string} should be visible on the result page on the Search Engine page', async function (expectedText: string) {     
    searchPage = new SearchPage(getPage())
    
    const firstResultText = await searchPage.getFirstSearchResultText();
    console.log("first results : ", firstResultText?.toLowerCase());
    console.log("expected results : ", expectedText.toLowerCase())
    expect(firstResultText?.toLowerCase()).toContain(expectedText.toLowerCase())
});