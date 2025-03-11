Feature: to test search functionality on the header

    Scenario: Basic search functionality
        Given User is on home page and accept cookies 
        When User navigates to header search
        When User enter search value on header search
        When User submit header search
        Then Results should be displayed