const utils = require("./../utils/utils");
const chai = require("chai").should();
const ProfilePageLocator = require(`./../page_UI/user_profile_page_ui.js`);
const { version } = require("chai");

class ProfilePage {
    verifyNameInProfilePage(name){
        utils.getText(ProfilePageLocator.nameLabel).should.equal(name);
    }

    verifyEmailText(email){
        utils.getText(ProfilePageLocator.emailText).should.equal(email);
    }

    clickToChangeAvatarIcon(){
        utils.click(ProfilePageLocator.changeAvatarButton);
    }   
    
    clickLogoutButton(){
        utils.click(ProfilePageLocator.logoutButton);
      }

    verifySuccessMessage(successMessage) {
        utils.getText(ProfilePageLocator.successMessageText).should.equal(successMessage);
    }

    verifyErrorMessage(errorMessage) {
        utils.getText(ProfilePageLocator.errorMessageText).should.equal(errorMessage);
    }

    clickChangeAirwattMonitor(){
        utils.click(ProfilePageLocator.airwattMonitorDropdownlist);
    }

    clickChangePasswordLink(){
        utils.click(ProfilePageLocator.changePasswordLink);
    }

    uploadAvatar(filePath) {
        utils.uploadFileToLocator(ProfilePageLocator.avatarFile, filePath);
    }
}

module.exports = ProfilePage;