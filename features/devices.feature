Feature: Devices managemnet
    Scenario: View devices information successfully
        Given I login with email "abc@gmail.com" and password "12345678"
        When I go to Devices page
        Then Devices page has Wattage label is "Wattage"
        And Devices page has Total power
        And Devices page has Device labels and device powers in ON part
        And Devices page has Device labels and device powers in OFF part
        And Devices OFF's color is dark
        And Total power equal with sum all actives devices power