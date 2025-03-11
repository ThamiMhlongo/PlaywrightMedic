Feature: to test search functionality

    Scenario: Basic search functionality
        Given User is on home page and accept cookies 
        When User enter search value
        When User submit search
        Then Results should be displayed