const { Given, When, Then } = require("cucumber");

const LoginPage = require("./../page_objects/login_page_object");
const StartPage = require("./../page_objects/start_page_object");
const NowPage = require("./../page_objects/now_page_object");

const loginPage = new LoginPage();
const startPage = new StartPage();
const nowPage = new NowPage();

Given(/^I go to Login page$/, () => {
  startPage.launchApp();
  startPage.clickToSignInButtonFromFirstScreen();
});

When(/^I click Forgot password link$/, () => {
  loginPage.clickToForgotPasswordLink();
});

When(/^I enter "([^"]*)" to email textbox$/, (userName) => {
  loginPage.enterValueToUserName(userName);
});

When(/^I enter "([^"]*)" to password textbox$/, (password) => {
  loginPage.enterValueToPassword(password);
});

When(/^I click Sign in button$/, () => {
  loginPage.clickToSignInButton();
});

Then(/^Error message "([^"]*)" appears$/, (errorMessage) => {
  loginPage.verifyErrorMessage(errorMessage);
});

Then(/^I should be navigated to Login Page$/, () => {
  loginPage.verifyTitleLoginPage("Sign in");
});

Then(/^Login button is disabled$/, () => {
  loginPage.verifyLoginButtonIsDisabled();
});

Then(/^I can login with email "([^"]*)" and new password "([^"]*)"$/, (email, newPass) => {
  startPage.launchApp();
  startPage.clickToSignInButtonFromFirstScreen();
  loginPage.enterValueToUserName(email);
  loginPage.enterValueToPassword(newPass);
  loginPage.clickToSignInButton();
  nowPage.verifyTitleNowPageDisplay();
});