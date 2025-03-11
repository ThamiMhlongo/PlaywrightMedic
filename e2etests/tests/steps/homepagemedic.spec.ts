import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { expect } from "@playwright/test"
import { getPage } from "../../codelib/corelib.spec";
import HomePage from "../pages/homepagemedicpage";

let homePage:HomePage;

Given('User is on home page and accept cookies', async function () {
    homePage = new HomePage(getPage())
    await homePage.acceptCookies()
});

Then('User navigates to header search', async function () {
    await homePage.gotoHeaderSearch()
});

Then('User enter search value', async function () {
    await homePage.search()
});

Then('User enter search value on header search', async function () {
    await homePage.searchOnHeader()
});

Then('User submit search', async function () {
    await homePage.submitSearch()
});

Then('User submit header search', async function () {
    await homePage.submitHeaderSearch()
});

When('Results should be displayed', async function () {
    await homePage.verifySearchResults()
});