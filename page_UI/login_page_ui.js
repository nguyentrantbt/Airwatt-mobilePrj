class LoginScreen {
  constructor() {
    this.emailTextbox = "~txtfieldEmail";
    this.passwordTextbox = "~txtfieldPassword";
    this.signInButton = "~btnSignIn";
    this.errorMessageText = "~lblError";
    this.loginTitle = "~lblTitle";
    this.forgotPasswordLink = "~btnForgotPassword";
    
    // this.elementID = '#abc';
  }
}

module.exports = new LoginScreen();
