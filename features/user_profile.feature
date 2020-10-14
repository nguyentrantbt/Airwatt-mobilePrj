Feature: Update user profile
    Scenario: View profile successfully
        Given I go to Profile page
        Then Verify page has Name "Jane Cooper"
        And Verify page has Email "jane.cooper@gmail.com"

    Scenario: Update Avatar successfully with .jpeg file
        Given I go to Profile page
        When I click Change Avatar icon
        And I upload "avt1.jpeg" file to Change Avatar modal
        Then New Avatar should be displayed

    Scenario: Update Avatar successfully with .jpg file
        Given I go to Profile page
        When I click Change Avatar icon
        And I upload "avt2.jpg" file to Change Avatar modal
        Then New Avatar should be displayed

    Scenario: Update Avatar successfully with .png file
        Given I go to Profile page
        When I click Change Avatar icon
        And I upload "avt3.png" file to Change Avatar modal
        Then New Avatar should be displayed

    Scenario: Avatar doesn't accept .txt file
        Given I go to Profile page
        When I click Change Avatar icon
        And I upload "nd.txt" file to Change Avatar modal
        And Error message "File is invalid." appears on Profile Page

    Scenario: Avatar doesn't accept file has size is larger than 2MB
        Given I go to Profile page
        When I click Change Avatar icon
        And I upload "size3M.jpg" file to Change Avatar modal
        Then Error message "Maximum file size is 2MB" appears on Profile Page