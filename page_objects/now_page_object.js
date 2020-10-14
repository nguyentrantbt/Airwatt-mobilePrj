const utils = require("./../utils/utils");
const chai = require("chai").should();
const NowPageLocator = require(`./../page_UI/now_page_ui.js`);

class NowPage {
    clickToDevicesTab(){
        utils.click(NowPageLocator.devicesTab)
    }

    clickToProfileTab(){
        utils.click(NowPageLocator.profileTab)
    }

    clickToReportLink(){
        utils.click(NowPageLocator.reportLink)
    }

    verifyTitleNowPageDisplay() {
        utils.isVisible(NowPageLocator.nowTitle).should.equal(true)
      }
  
}

module.exports = NowPage;
