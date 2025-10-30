import Common from "./common.js";
class LoginPage extends Common {
  constructor(page) {
    super(page);
    this.page = page;
  }
  async enterUserName(userName) {
    await this.$inputField("username").fill(userName);
  }
  async enterPassWord(passWord) {
    await this.$inputField("password").fill(passWord);
  }
  async clickOnSignInButton() {
    await this.$button("Sign In").click();
  }
  async logIn(userName, passWord) {
    await this.enterUserName(userName);
    await this.enterPassWord(passWord);
    await this.clickOnSignInButton();
  }
}
module.exports = LoginPage;
