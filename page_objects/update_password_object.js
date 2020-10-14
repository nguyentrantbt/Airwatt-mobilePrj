const utils = require("./../utils/utils");
const chai = require("chai").should();
const UpdatePasswordPageLocator = require(`./../page_UI/update_password_page_ui.js`);

class UpdatePasswordPage {
    verifyChangePasswordTitlePage(title){
        utils.getText(UpdatePasswordPageLocator.changePasswordTitle).should.equal(title);
    }

    enterValueToCurrentPasswordTextbox(currentPass){
        utils.enterValueToTextbox(UpdatePasswordPageLocator.currentPasswordTextbox, currentPass);
    }

    enterValueToNewPasswordTextbox(newPass){
        utils.enterValueToTextbox(UpdatePasswordPageLocator.newPasswordTextbox, newPass);
    }

    enterValueToRetypeNewPasswordTextbox(passAgain){
        utils.enterValueToTextbox(UpdatePasswordPageLocator.retypeNewPasswordTextbox, passAgain);
    }

    clickConfirmButton(){
        utils.click(UpdatePasswordPageLocator.confirmButton);
    }

    clickCancelButton(){
        utils.click(UpdatePasswordPageLocator.cancelButton);
    }

    verifyUpdatePasswordButtonIsDisabled() {
        utils.checkElementIsDisabled(UpdatePasswordPageLocator.confirmButton);
    }

    verifyErrorMessage(errorMessage) {
        utils.getText(UpdatePasswordPageLocator.errorMessageText).should.equal(errorMessage);
    }

    verifySuccessMessage(successMessage) {
        utils.getText(UpdatePasswordPageLocator.successMessageText).should.equal(successMessage);
    }

}
module.exports = UpdatePasswordPage;