Feature: View Comments
    In order to read omments
    As an admin
    I want to read comments

Background: Lauch SAMPRA MMS
    Given I visit dashboard on "http://localhost:3000/"
    
 Scenario: Read Comments for FSOCIETY
        When I enter "test@email.com" on the element "reset-password-email"
        And I click on "reset-button"   