Feature: Login and logout
    Scenario: Login with valid email and password
        Given I go to Login page
        When I enter "test@email.com" to email textbox
        And I enter "12345678" to password textbox
        And I click Sign in button
        Then I should be navigated to Now Page
        When I go to Profile Page
        And I click Logout button
        Then I should be navigated to Splash Screen

    Scenario: Login with invalid email
        Given I go to Login page
        When I enter "nguyen@gmail.com" to email textbox
        And I enter "!@#123qwe" to password textbox
        And I click Sign in button
        Then Error message "Login failed, please try again!" appears

    Scenario: Login with valid email and invalid password
        Given I go to Login page
        When I enter "test@email.com" to email textbox
        And I enter "01#wrongpass" to password textbox
        And I click Sign in button
        Then Error message "Login failed, please try again!" appears

    Scenario: Login button is disabled with email is blank
        Given I go to Login page
        When I enter "" to email textbox
        And I enter "!@#123qwe" to password textbox
        Then Login button is disabled

    Scenario: Login button is disabled with password is blank
        Given I go to Login page
        When I enter "nguyenstt01@gmail.com" to email textbox
        And I enter "" to password textbox
        Then Login button is disabled

    Scenario: Login with both email and password fields are blank
        Given I go to Login page
        When I enter "" to email textbox
        And I enter "" to password textbox
        Then Login button is disabled
