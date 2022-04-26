Feature: View Members
    In order view Members
    As an admin
    I want to see all the members of an organisation

    Background: Application under test
        Given I visit dashboard on "http://localhost:3000/members"

    Scenario Outline: See members for <scenario>
        When I click the element with testid "<radioButton>"
        Then I should see that "member-list-item" occurs at least once

        Examples:
            | scenario | radioButton           |
            | FSOCIETY | radio-button-fsociety |
            | ESCORP   | radio-button-ecorp    |
