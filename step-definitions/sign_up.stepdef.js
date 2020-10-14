const { Given, When, Then} = require("cucumber");
const SignUpPage = require("./../page_objects/sign_up_page_object");
const Utils = require("../utils/utils");
const signUpPage = new SignUpPage();

When(/^I enter "([^"]*)" to signup full name textbox$/, (signUpName) => {
    signUpPage.enterValueToSignUpNameTextbox(signUpName);
});

When(/^I enter "([^"]*)" to signup email textbox$/, (signUpEmail) => {
    signUpPage.enterValueToSignUpEmailTextbox(signUpEmail);
});

When(/^I enter "([^"]*)" to signup password textbox$/, (signUpPassword) => {
    signUpPage.enterValueToPaswordTextbox(signUpPassword);
});

When(/^I enter "([^"]*)" to signup retype password textbox$/, (signUpRetypePassword) => {
    signUpPage.enterValueToRetypePaswordTextbox(signUpRetypePassword);
});

When(/^I click Sign up button$/, (signUpButton) => {
    signUpPage.clickToSignUpButton(signUpButton);
});

Then(/^Message "([^"]*)" displays on Sign Up page$/, (successMessage) => {
    signUpPage.verifySuccessMessage(successMessage);
});

Then(/^Error message "([^"]*)" on Sign Up displays$/, (errorMessage) => {
    signUpPage.verifyErrorMessage(errorMessage);
});

Then(/^Sign up button is disabled$/, () => {
    signUpPage.verifySignUpButtonIsDisabled();
});