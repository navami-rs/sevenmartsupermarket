import { test, expect } from "@playwright/test";
import HomePage from "../page-objects/HomePage.js";
import AdminUser from "../page-objects/AdminUser.js"
let page, homePage, adminuser;
homePage = new HomePage(page);
adminuser=new AdminUser(page);


test("smoke Admin User Creation", async () => {
homePage.beforeEach();
expect(await homePage.adminlogo()).toContain("7rmart supermarket");
expect(await adminuser.).toContain("7rmart supermarket");  
 
  
});