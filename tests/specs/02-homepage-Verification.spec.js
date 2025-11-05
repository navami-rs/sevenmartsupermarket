import { test, expect } from "@playwright/test";
import LoginPage from "../page-objects/login-page.js";
import credentials from "../test-data/credentials.json";
import HomePage from "../page-objects/HomePage.js";
let page, context, loginPage, homePage;

test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.launchUrl();
  await loginPage.logIn(credentials.userName, credentials.passWord);
  await context.storageState({ path: "state.json" });
  //await context.close();
});

test.beforeEach(async ({browser}) => {
 context = await browser.newContext({ storageState: "state.json" });
 page = await context.newPage();
 loginPage = new LoginPage(page);
 homePage = new HomePage(page);
});

test("HomePage Verification", async () => {
await loginPage.launchUrl();
  expect(await homePage.getProfileName()).toContain("Admin");
  await expect(homePage.$profileName).toBeVisible();
 // await expect(homePage.$logo("AdminLTE Logo")).toBeVisible(); //wrong
  expect(await homePage.adminlogo()).toContain("7rmart supermarket");
});

test("Admin Users Count Verification", async () => {
     await loginPage.launchUrl();
  await expect(homePage.$adminUserNumber).toBeVisible();
  expect(await homePage.getAdminNumbers()).not.toBeNull();
  expect(await homePage.getAdminNumbers()).toBeGreaterThanOrEqual(11000);
});

test("Manage Contact Count Verification", async () => {
     await loginPage.launchUrl();
  await expect(homePage.$manageContactNumber).toBeVisible();
  expect(await homePage.getManageContactNumbers()).not.toBeNull();
  expect(await homePage.getManageContactNumbers()).toBeGreaterThanOrEqual(1);
});