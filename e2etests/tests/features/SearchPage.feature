Feature: Search engine on the Mediclinic website

  Background:
    Given User is on home page and accept cookies

  @smoke
  Scenario: Using the search input with the text "covid"
    Given I fill the search input with the "covid" term on the Search Engine page
    When I click on the search button on the Search Engine page
    Then the text "Covid" should be visible on the result page on the Search Engine page

  Scenario Outline: Using the search input with the text "<search_text>"
    Given I fill the search input with the "<search_text>" term on the Search Engine page
    When I click on the search button on the Search Engine page
    Then the text "<expected_text>" should be visible on the result page on the Search Engine page

    Examples:
      | search_text | expected_text |
      | medic     | medic    |
      | treatment  | treatment    |