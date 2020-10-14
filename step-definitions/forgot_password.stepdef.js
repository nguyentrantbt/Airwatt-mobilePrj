const { Given, When, Then } = require("cucumber");

const ForgotPasswordPage = require("./../page_objects/forgot_password_page_object");

const forgotPasswordPage = new ForgotPasswordPage();


When(/^I enter "([^"]*)" to email reset textbox$/, (email) => {
    forgotPasswordPage.enterValueToEmailReset(email);
});

When(/^I click Reset for new password button$/, () => {
    forgotPasswordPage.clickToResetForNewPasswordButton();
});

Then(/^Success message "([^"]*)" appears$/, (successMessage) => {
    forgotPasswordPage.verifySuccessMessage(successMessage);
});

Then(/^Error message "([^"]*)" appears on Forgot Password page$/, (errorMessage) => {
    forgotPasswordPage.verifyErrorMessage(errorMessage);
});

Then(/^Reset for new password button is disabled$/, () => {
    forgotPasswordPage.verifyResetPasswordButtonIsDisabled();
});

Then(/^Verify navigate to Forgot Password page$/, () => {
    forgotPasswordPage.verifyTitleForgotPasswordPage("Forgot Password?");
});