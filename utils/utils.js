const chai = require("chai").should();

class Utils {
  static launchApp() {
    driver.launchApp();
  }

  // static acceptAlertT() {
  //   if (browser.isAlertOpen()) {
  //     browser.acceptAlert();
  //   }
  // }

  static switchToNativeContext() {
    browser.switchContext("NATIVE_APP");
  }

  static pause(seconds) {
    browser.pause(seconds * 1000);
  }

  static isVisible(locator) {
    return $(locator).isDisplayed() ? true : false;
  }

  static click(locator) {
    $(locator).click();
  }

  static waitForElement(locator, waitTimeInSeconds) {
    $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
  }

  static clearText(locator) {
    $(locator).clearValue();
  }

  static sendText(locator, inputText) {
    $(locator).addValue(inputText);
  }

  static enterValueToTextbox(locator, inputText) {
    this.clearText(locator);
    this.sendText(locator, inputText);
  }

  static getText(locator) {
    return $(locator).getText();
  }

  static uploadFileToLocator(locator, filePath) {
    $(locator).setValue(browser.uploadFile(filePath));
  }

  static selectValueInDropdownList(locator, value) {
    $(locator).selectByVisibleText(value);
  }

  static checkElementIsDisabled(locator) {
    $(locator).isEnabled().should.equal(false);
  }
}

module.exports = Utils;
