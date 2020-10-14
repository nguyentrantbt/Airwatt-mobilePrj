const utils = require("../utils/utils");
const chai = require("chai").should();
const ForgotPasswordPageLocator = require(`../page_UI/forgot_password_page_ui.js`);
const { version } = require("chai");

class ForgotPasswordPage {

  enterValueToEmailReset(email) {
    utils.enterValueToTextbox(ForgotPasswordPageLocator.emailResetTextbox, email);
  }

  clickToResetForNewPasswordButton() {
    utils.click(ForgotPasswordPageLocator.resetForNewPasswordButton);
  }

  verifySuccessMessage(successMessage) {
    utils.getText(ForgotPasswordPageLocator.successMessageText).should.equal(successMessage);
  }

  verifyErrorMessage(errorMessage) {
    utils.getText(ForgotPasswordPageLocator.errorMessageText).should.equal(errorMessage);
  }

  verifyResetPasswordButtonIsDisabled() {
    utils.checkElementIsDisabled(ForgotPasswordPageLocator.resetForNewPasswordButton);
  }

  verifyTitleForgotPasswordPage(titleForgotPasswordPage) {
    utils.getText(ForgotPasswordPageLocator.titleForgotPasswordPage).should.equal(titleForgotPasswordPage);
  }

}
module.exports = ForgotPasswordPage;