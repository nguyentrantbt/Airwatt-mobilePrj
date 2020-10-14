Feature: Update password
    Scenario: Update password with all valid fields
        Given I go to Profile page
        When I click Change password button
        And I enter "!@#123qwe" to current password textbox
        And I enter "Abc123." to new password update textbox
        And I enter "Abc123." to retype new password textbox
        And I click Confirm button
        Then Success message "Change password successfully" of Update Password appears
        And I can login with email "nguyenstt01@gmail.com" and new password "Abc123."

    Scenario: Can not Update password with invalid current password
        Given I go to Change Password Page
        When I enter "12345" to current password textbox
        And I enter "Abc123." to new password update textbox
        And I enter "Abc123." to retype new password textbox
        And I click Confirm button
        Then Error message "Current password is wrong." of Update Password appears

    Scenario: Can not Update password when new password is same with current password
        Given I go to Change Password Page
        When I enter "!@#123qwe" to current password textbox
        And I enter "!@#123qwe" to new password update textbox
        And I enter "!@#123qwe" to retype new password textbox
        And I click Confirm button
        And Error message "New password must different with current password." of Update Password appears

    Scenario: Can not Update password when new password and Retype new password don't match
        Given I go to Change Password Page
        When I enter "!@#123qwe" to current password textbox
        And I enter "!@#123qwe" to new password update textbox
        And I enter "!@#123q" to retype new password textbox
        Then Confirm button is disabled
        And Error message "Password again is not matched." of Update Password appears

    Scenario: Can not Update password when all field blank
        Given I go to Change Password Page
        When I enter "" to current password textbox
        And I enter "" to new password update textbox
        And I enter "" to retype new password textbox
        Then Confirm button is disabled
        And Error message "All fields are required." of Update Password appears

    Scenario: Can not Update password when current password is blank
        Given I go to Change Password Page
        When I enter "" to current password textbox
        And I enter "Abc123." to new password update textbox
        And I enter "Abc123." to retype new password textbox
        Then Confirm button is disabled
        And Error message "All fields are required." of Update Password appears

    Scenario: Can not Update password when new password is blank
        Given I go to Change Password Page
        And I enter "!@#123qwe" to current password textbox
        And I enter "" to new password update textbox
        And I enter "Abc123." to retype new password textbox
        Then Confirm button is disabled
        And Error message "All fields are required." of Update Password appears

    Scenario: Can not Update password when password again is blank
        Given I go to Change Password Page
        When I enter "!@#123qwe" to current password textbox
        And I enter "Abc123." to new password update textbox
        And I enter "" to retype new password textbox
        Then Confirm button is disabled
        And Error message "All fields are required." of Update Password appears

    Scenario: Sign up with enter space only to new password textbox
        Given I go to Change Password Page
        When I enter "!@#123qwe" to current password textbox
        And I enter "   " to new password update textbox
        And I enter "Abc123." to retype new password textbox
        Then Confirm button is disabled
        And Error message "Invalid new password." of Update Password appears