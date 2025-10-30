import credentials from '../test-data/credentials.json'
class Common {
  constructor(page) {
    this.page = page;
    this.$inputField = (name) => page.locator(`//input[@name="${name}"]`);
    this.$button = (text) =>
      page.locator(`//button[contains(text(),"${text}")]`);
  }
  async launchUrl(){
    await this.page.goto(credentials.url);
  }
}
module.exports=Common;