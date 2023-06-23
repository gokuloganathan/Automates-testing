import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.getByRole("button", { name: " My account" }).click();
    await page.getByPlaceholder("E-Mail Address").click();
    await page
        .getByPlaceholder("E-Mail Address")
        .fill("gokulpollachi25@gmail.com");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("gokul25");
    await page.getByRole("button", { name: "Login" }).click();
    await page
        .getByRole("link", { name: " Edit your account information" })
        .click();
    await page.getByPlaceholder("First Name").click();
    await page.getByPlaceholder("First Name").fill("gokulL");
    await page.getByRole("button", { name: "Continue" }).click();

    await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');

    await page.getByRole("link", { name: "Logout", exact: true }).click();
    await page.getByRole("link", { name: "Continue" }).click();
});
