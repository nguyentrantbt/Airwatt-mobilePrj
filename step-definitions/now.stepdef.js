const { Given, When, Then } = require("cucumber");

const NowPage = require("./../page_objects/now_page_object");

const nowPage = new NowPage();

Then(/^I should be navigated to Now Page$/, () => {
  nowPage.verifyTitleNowPageDisplay();
});

When(/^I go to Profile Page$/, () => {
  nowPage.clickToProfileTab();
});
