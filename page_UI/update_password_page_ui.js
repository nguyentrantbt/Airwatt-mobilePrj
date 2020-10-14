class UpdatePasswordScreen {
  constructor() {
    this.changePasswordTitle = "";
    this.currentPasswordTextbox = "txtfieldCurrentPassword";
    this.newPasswordTextbox = "txtfieldNewPassword";
    this.retypeNewPasswordTextbox = "txtfieldRetypePassword";
    this.confirmButton = "btnConfirm";
    this.cancelButton = "btnCancel";
    this.successMessageText = "";
    this.errorMessageText = "";
  }
}

module.exports = new UpdatePasswordScreen();
