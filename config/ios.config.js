const { config } = require("./wdio.config");
const IosInfo = require("./ios.info");

// Appium capabilities
config.capabilities = [
  {
    platformName: "iOS",
    noReset: true,
    fullReset: false,
    autoGrantPermissions: true,
    // autoAcceptAlerts: true,
    maxInstances: 1,
    automationName: "XCUITest",
    deviceName: IosInfo.deviceName(),
    platformVersion: IosInfo.platFormVersion(),
    app: IosInfo.appName(),
  },
];

// config.cucumberOpts.tagExpression = "@iosApp";

exports.config = config;
