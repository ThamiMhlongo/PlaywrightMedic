Feature: to test doctor search functionality

    Scenario: to test basic doctor search functionality
        Given User is on home page and accept cookies 
        When User navigates to doctors page
        When User enter search value on doctor search
        When User submit doctor search
        Then Doctors search results should be displayed