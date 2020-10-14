const { Given, When, Then } = require("cucumber");
const UpdatePasswordPage = require("./../page_objects/update_password_object");
const ProfilePage = require("./../page_objects/user_profile_object");
const LoginPage = require("./../page_objects/login_page_object");
const NowPage = require("./../page_objects/now_page_object");

const updatePasswordPage = new UpdatePasswordPage();
const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const nowPage = new NowPage();


Then(/^Verify navigate to Change Password page$/, () => {
    updatePasswordPage.verifyChangePasswordTitlePage("Change password");
});

When(/^I enter "([^"]*)" to current password textbox$/, (currentPass) => {
    updatePasswordPage.enterValueToCurrentPasswordTextbox(currentPass);
});

When(/^I enter "([^"]*)" to new password update textbox$/, (newPass) => {
    updatePasswordPage.enterValueToNewPasswordTextbox(newPass);
});

When(/^I enter "([^"]*)" to retype new password textbox$/, (passAgain) => {
    updatePasswordPage.enterValueToRetypeNewPasswordTextbox(passAgain);
});

When(/^I click Confirm button$/, () => {
    updatePasswordPage.clickConfirmButton();
});

When(/^I click Cancel button$/, () => {
    updatePasswordPage.clickCancelButton();
});

Then(/^Confirm button is disabled$/, () => {
    updatePasswordPage.verifyUpdatePasswordButtonIsDisabled();
});

Then(/^Error message "([^"]*)" of Update Password appears$/, (errorMess) =>{
    updatePasswordPage.verifyErrorMessage(errorMess);
});

Then(/^Success message "([^"]*)" of Update Password appears$/, (successMess) =>{
    updatePasswordPage.verifySuccessMessage(successMess);
});

Given(/^I go to Change Password Page$/, () => {
    loginPage.launchApp();
    loginPage.enterValueToUserName("nguyenstt01@gmail.com");
    loginPage.enterValueToPassword("!@#123qwe");
    loginPage.clickToLoginButton();
    nowPage.clickToProfileTab();
    profilePage.clickChangePasswordLink();
  });