Feature: Sign up
    Scenario: Sign up with valid format for all fields
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Message "Sign up successfully" displays on Sign Up page

    Scenario: Sign up with invalid format for both name and email
        Given I go to Sign up page
        When I enter "@.@  n g u y e n  :) " to signup full name textbox
        And I enter "nguyenstt01.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid name" on Sign Up displays
        And Error message "Invalid email" on Sign Up displays

    Scenario: Sign up with invalid format for name
        Given I go to Sign up page
        When I enter "@.@  n g u y e n  :) " to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid name" on Sign Up displays

    Scenario: Sign up with invalid format for email
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyenstt01.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid email" on Sign Up displays

    Scenario: Sign up with email exists in system
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyen@gmail.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Email Exists" on Sign Up displays

    Scenario: Sign up with name, email and password are blank
        Given I go to Sign up page
        When I enter "" to signup full name textbox
        And I enter "" to signup email textbox
        And I enter "" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        Then Sign up button is disabled
        And Error message "All fields are required" on Sign Up displays

    Scenario: Sign up with blank name
        Given I go to Sign up page
        When I enter "" to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        Then Sign up button is disabled
        And Error message "Name is required" on Sign Up displays

    Scenario: Sign up with blank email
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        Then Sign up button is disabled
        And Error message "Email is required" on Sign Up displays

    Scenario: Sign up with blank password
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        Then Sign up button is disabled
        And Error message "Password is required" on Sign Up displays

    Scenario: Sign up when enter space only to name textbox
        Given I go to Sign up page
        When I enter "   " to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid name" on Sign Up displays

    Scenario: Sign up with enter space only to email textbox
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter " " to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid email" on Sign Up displays

    Scenario: Sign up with enter space only to password textbox
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter " " to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid password" on Sign Up displays

    Scenario: Sign up with password length is less than 8 characters
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "ahjas" to signup password textbox
        And I enter "Airwattpass123" to signup retype password textbox
        And I click Sign up button
        Then Error message "Invalid password" on Sign Up displays

    Scenario: Sign up with Retype password is not same with Password
        Given I go to Sign up page
        When I enter "Thao Nguyen" to signup full name textbox
        And I enter "nguyenstt01@gmail.com" to signup email textbox
        And I enter "Airwattpass123" to signup password textbox
        And I enter "Airwattpass124" to signup retype password textbox
        And I click Sign up button
        Then Error message "Retype password does not match" on Sign Up displays