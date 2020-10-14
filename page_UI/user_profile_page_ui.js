class UserProfileScreen {
  constructor() {
    this.changeAvatarButton = "";
    this.nameLabel = "";
    this.emailText = "";
    this.changePasswordLink = "~cellChangePassword";
    this.changeAirwattMonitorLink = "~cellChangeMonitor";
    this.logoutButton = "~cellLogOut";
    this.successMessageText = "";
    this.errorMessageText = "";
  }
}

module.exports = new UserProfileScreen();
