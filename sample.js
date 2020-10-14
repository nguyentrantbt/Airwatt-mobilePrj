const wdio = require("webdriverio");
const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    browserName: "Safari",
    platformName: "iOS",
    platformVersion: "13.2",
    deviceName: "iPhone 8",
  },
};

async function main() {
  const client = await wdio.remote(opts);

  client.url("http://www.google.com");
  const input = await client.$("//*[@name='q']");
  input.setValue("Quynh Test");
}

main();
