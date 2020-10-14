class SignUpScreen {
    constructor() {
        this.signUpNameTextbox = "~txtfieldFullName";
        this.signUpEmailTextbox = "~txtfieldEmail";
        this.signUpPasswordTextbox = "~txtfieldPassword";
        this.signUpRetypePasswordTextbox = "~txtfieldRetypePassword";
        this.signUpButton = "~btnCreateAccount";
        this.messageText = "";
        this.errorMessageText = "";
    }
  }
  
  module.exports = new SignUpScreen();