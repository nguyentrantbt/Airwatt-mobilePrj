const utils = require("./../utils/utils");
const chai = require("chai").should();
const LoginPageLocator = require(`./../page_UI/login_page_ui.js`);

class LoginPage {
  enterValueToUserName(userName) {
    utils.enterValueToTextbox(LoginPageLocator.emailTextbox, userName);
  }

  enterValueToPassword(password) {
    utils.enterValueToTextbox(LoginPageLocator.passwordTextbox, password);
  }

  clickToSignInButton() {
    utils.click(LoginPageLocator.signInButton);
  }

  verifyErrorMessage(errorMessage) {
    utils.getText(LoginPageLocator.errorMessageText).should.equal(errorMessage);
  }

  verifyLoginButtonIsDisabled() {
    utils.checkElementIsDisabled(LoginPageLocator.signInButton);
  }

  verifyTitleLoginPage(expectedLoginTitle) {
    utils.getText(LoginPageLocator.loginTitle).should.equal(expectedLoginTitle);
  }

  clickToForgotPasswordLink() {
    utils.click(LoginPageLocator.forgotPasswordLink);
  }
}

module.exports = LoginPage;
