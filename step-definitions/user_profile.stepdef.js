const { Given, When, Then } = require("cucumber");

const ProfilePage = require("./../page_objects/user_profile_object");
const LoginPage = require("./../page_objects/login_page_object");
const NowPage = require("./../page_objects/now_page_object");
const StartPage = require("./../page_objects/start_page_object");

const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const nowPage = new NowPage();
const startPage = new StartPage();

Given(/^I go to Profile page$/, () => {
  startPage.launchApp();
  startPage.clickToSignInButtonFromFirstScreen();
  loginPage.enterValueToUserName("test@email.com");
  loginPage.enterValueToPassword("12345678");
  loginPage.clickToSignInButton();
  nowPage.clickToProfileTab();
});

When(/^I click Logout button$/, () => {
  profilePage.clickLogoutButton();
});

When(/^I click Change Avatar icon$/, () => {
  profilePage.clickToChangeAvatarIcon();
});

Then(/^Verify page has Name "([^"]*)"$/, (name) => {
  profilePage.verifyNameInProfilePage(name);
});

Then(/^Error message "([^"]*)" appears on Profile Page$/, (errMess) => {
  profilePage.verifyErrorMessage(errMess);
});

When(/^I upload "([^"]*)" file to Change Avatar modal$/, (fileName) => {
  profilePage.uploadAvatar(fileName);
});

When(/^I click Change password button$/, () => {
  profilePage.clickChangePasswordLink();
});

Then(/^Verify page has Email "([^"]*)"/, (email) => {
  profilePage.verifyEmailText(email);
});
