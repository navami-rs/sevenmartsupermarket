import { test } from "@playwright/test";
import LoginPage from "../page-objects/login-page.js";

/*let page, context, loginpage;
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginpage = new LoginPage(page);
});*/

/*test("Verify login functionality", async () => {
 // await loginpage.launchUrl();
  await page.goto("https://groceryapp.uniqassosiates.com/admin/login");
 await loginpage.logIn("admin", "admin");

 
});*/
 test ("Verify login functionality", async ({ page }) => {
  const loginpage = new LoginPage(page);
  await page.goto("https://groceryapp.uniqassosiates.com/admin/login");
  await loginpage.logIn("admin", "admin");
  console.log("testttttttttttt")
  console.log("continuous integration first ")
});

