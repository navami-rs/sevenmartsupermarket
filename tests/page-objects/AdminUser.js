import Common from "./common.js"

class AdminUser extends Common {
  constructor(page) {
    super(page);
    this.page = page;
    this.$adminUser_MoreInfo = page.locator('(//i[@class="fas fa-arrow-circle-right"])[1]');
    this.$newUser=page.locator('//a[@class="btn btn-rounded btn-danger"]/i');
    this.$add_UserName=page.locator('//label[text()="Username"]');
    this.$add_Password=page.locator('//label[text()="Password"]');
    this.$userType = page.locator('//select[@id="user_type"]/option[3]');
    this.$alertBox=page.locator("//div[@class='alert alert-success alert-dismissible']");
    this.$adminlogotext = page.locator(
      '//span[contains(text(),"7rmart supermarket")]'
    );
   
  }
  async getProfileName() {
    return await this.$profileName.textContent();
  }

  async adminlogo() {
    return await this.$adminlogotext.textContent();
  }
  async createNewUser() {
  return await this.$adminUser_MoreInfo.click();
  }
  
}
module.exports = HomePage;