class IosInfo {
  static deviceName() {
    return "iPhone 8"; // pass the device name
  }

  static platFormVersion() {
    return "13.2"; // pass the platform version
  }

  static appName() {
    // return "com.apple.Preferences"; // pass the bundleid or ipa name
    // return "/Users/macintoshhd/Desktop/test.app";
    return "./files/AirWatt.app";
  }
}

module.exports = IosInfo;
