const utils = require("../utils/utils");
const chai = require("chai").should();
const SignUpPageLocator = require(`../page_UI/sign_up_page_ui.js`);

class SignUpPage {
    enterValueToSignUpNameTextbox(newName) {
        utils.enterValueToTextbox(SignUpPageLocator.signUpNameTextbox, newName);
    }

    enterValueToSignUpEmailTextbox(email) {
        utils.enterValueToTextbox(SignUpPageLocator.signUpEmailTextbox, email);
    }

    enterValueToPaswordTextbox(password) {
        utils.enterValueToTextbox(SignUpPageLocator.signUpPasswordTextbox, password);
    }

    enterValueToRetypePaswordTextbox(retypePassword) {
        utils.enterValueToTextbox(SignUpPageLocator.signUpRetypePasswordTextbox, retypePassword);
    }

    clickToSignUpButton() {
        utils.click(SignUpPageLocator.signUpButton);
    }

    verifyErrorMessage(errorMessage) {
        utils.getText(SignUpPageLocator.errorMessageText).should.equal(errorMessage);
    }

    verifySuccessMessage(successMessage) {
        utils.getText(SignUpPageLocator.errorMessageText).should.equal(successMessage);
    }

    verifySignUpButtonIsDisabled() {
        utils.checkElementIsDisabled(SignUpPageLocator.signUpButton);
      }
}
module.exports = SignUpPage;