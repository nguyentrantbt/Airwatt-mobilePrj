Feature: Now activities
    Scenario: View now status successfully
        Given I login with email "abc@gmail.com" and password "12345678"
        When I go to Now page
        Then Verify now page has text "Good morning!" in greeting part
        And Verify now page has total power icon
        And Verify now page has "457w" in total power part
        And Verify now page has "7" bubbles in bubble part
        And Verify now page has device name and device power in each bubble with "Television"-"213w", "Fridge"-"53w", "Microwave"-"213w", "Iron"-"147w", "Oven"-"156w", "Camera"-"256w", "Others"-"123w"
        And Verify now page has Date label is "Today" in notifications part
        And Verify now page has Report button in notifications part
        And Verify now page has device activity list in notifications part
        And Verify now page has device icon in notifications part
        And Verify now page has time notifications part

    Scenario: Total information is displayed when click Report button
        Given I login with email "abc@gmail.com" and password "12345678"
        When I go to Now page
        And I click Report button
        Then Report modal appears
        And Report modal has total power
        And Report modal has devices name
        And Report modal has devices power
        And Report modal has devices status

    Scenario: Can scroll down the Now page
        Given I login with email "abc@gmail.com" and password "12345678"
        When I go to Now page
        And I scroll down to Now page
        Then Now page is scrolled down
        And Hidden data is displayed

    Scenario: Can scroll up the Now page
        Given I login with email "abc@gmail.com" and password "12345678"
        When I go to Now page
        And I scroll up to Now page
        Then Now page is scrolled up
        And Hidden data is displayed