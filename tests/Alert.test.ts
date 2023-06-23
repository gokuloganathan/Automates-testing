import test, { expect } from "@playwright/test";

test("alert ok testing",async({page})=>{
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );

    page.on("dialog",async(alert) => {
       const text = alert.message()
       console.log(text);
       
       await alert.accept(); 
    })

    await page.locator("button:has-text('Click Me')").nth(0).click()
})

test("alert with input testing", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    const text = alert.message();
    console.log(text);
    await alert.dismiss();
  });

  await page.locator("button:has-text('Click Me')").nth(1).click();
  expect(page.locator("#confirm-demo")).toContainText("Cancel");
});

test("alert dismiss testing", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );

  page.on("dialog", async (alert) => {
    const text = alert.defaultValue();
    console.log(text);
    await alert.accept("Gokul Logu");
    //console.log(text);
  });

  await page.locator("button:has-text('Click Me')").nth(2).click();
  expect(page.locator("#prompt-demo")).toContainText("'Gokul Logu'");
});