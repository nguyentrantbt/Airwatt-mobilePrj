const utils = require("./../utils/utils");
const chai = require("chai").should();
const StartPageLocator = require(`./../page_UI/start_page_ui.js`);

class StartPage {
  launchApp() {
    utils.launchApp();
    utils.switchToNativeContext();
    utils.pause(2);
  }

  clickToSignInButtonFromFirstScreen() {
    utils.click(StartPageLocator.signInButton);
  }

  clickToGetStartedButton() {
    utils.click(StartPageLocator.getStartedButton);
  }

  verifyGetStartedButtonDisplay() {
    utils.isVisible(StartPageLocator.getStartedButton).should.equal(true);
  }
}

module.exports = StartPage;
