Feature: Search engine on the Mediclinic website

  Background:
    Given I am on home page and accept cookies
    Given I navigate to doctors page

  @smoke
  Scenario: Using the search input with the text "david"
    Given I fill the doctors search input with the "david" term on the Search Engine page
    When I click on the doctors search button on the Search Engine page
    Then the doctor text "David" should be visible on the result page on the Search Engine page

  Scenario Outline: Using the search input with the text "<search_text>"
    Given I fill the search input with the "<search_text>" term on the Search Engine page
    When I click on the doctors search button on the Search Engine page
    Then the doctor text "<expected_text>" should be visible on the result page on the Search Engine page

    Examples:
      | search_text | expected_text |
      # | Anna     | Anna    |
      # | Adam  | Adam    |