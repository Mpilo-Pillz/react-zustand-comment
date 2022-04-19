Feature: Add View Delete Comments
    In order to administer comments
    As an admin
    I want to read create and delete comments

    Background: Application under test
        Given I visit dashboard on "http://localhost:3000/"

    Scenario Outline: Add Comments for <scenario>
        When I click the element with testid "<radioButton>"
        And I enter "<comment>" inside "add-comment-text-input"
        And I click the element with testid "post-comment-button"
        Then I should see that "comments-list-item" occurs at least once

        Examples:
            | scenario | radioButton           | comment                    |
            | FSOCIETY | radio-button-fsociety | Test adding comments       |
            | ESCORP   | radio-button-ecorp    | Test adding  comments      |
            | FSOCIETY | radio-button-fsociety | Test adding other comments |
            | ESCORP   | radio-button-ecorp    | Test adding other comments |
            | FSOCIETY | radio-button-fsociety | Test adding more comments  |
            | ESCORP   | radio-button-ecorp    | Test adding more comments  |

    Scenario Outline: Read Comments for <scenario>
        When I click the element with testid "<radioButton>"
        Then I should see that "comments-list-item" occurs at least once


        Examples:
            | scenario | radioButton           |
            | FSOCIETY | radio-button-fsociety |
            | ESCORP   | radio-button-ecorp    |

    Scenario Outline: Delete Comments for <scenario>
        When I click the element with testid "<radioButton>"
        And I enter "Test adding comments" inside "add-comment-text-input"
        And I click the element with testid "delete-all-comments"
        Then I should see the text "No Data"

        Examples:
            | scenario | radioButton           |
            | FSOCIETY | radio-button-fsociety |
            | ESCORP   | radio-button-ecorp    |




