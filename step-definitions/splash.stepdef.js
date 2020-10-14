const { Given, When, Then } = require("cucumber");

const SplashPage = require("../page_objects/start_page_object");

const splashPage = new SplashPage();

Then(/^I should be navigated to Splash Screen$/, () => {
  splashPage.verifyGetStartedButtonDisplay();
});
