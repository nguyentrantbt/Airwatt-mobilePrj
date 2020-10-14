Feature: Forgot password
    Scenario: Reset password with email exists in system
        Given I go to Login page
        When I click Forgot password link
        And I enter "test@email.com" to email reset textbox
        And I click Reset for new password button
        Then Success message "A new password is sent to your email." appears

    Scenario: Can not reset password with email does not exist in system
        Given I go to Login page
        When I click Forgot password link
        And I enter "nguyenstt@mail.com" to email reset textbox
        And I click Reset for new password button
        Then Error message "Please enter the correct email" appears on Forgot Password page

    Scenario: Can not reset password with invalid email format
        Given I go to Login page
        When I click Forgot password link
        And I enter "nguyenstt.com" to email reset textbox
        And I click Reset for new password button
        Then Error message "Please enter the correct email" appears on Forgot Password page

    Scenario: Can not reset password with blank email
        Given I go to Login page
        When I click Forgot password link
        And I enter "" to email reset textbox
        Then Reset for new password button is disabled

    Scenario: Can not reset password when enter space only into email textbox
        Given I go to Login page
        When I click Forgot password link
        And I enter " " to email reset textbox
        Then Reset for new password button is disabled