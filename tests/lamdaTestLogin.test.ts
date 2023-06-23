import test, { chromium } from "@playwright/test";

test("login test demo", async () => {
  const browser = await chromium.launch({
    //headless: false, //enbble to false to see the browser actions lively
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io");

  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
  //a[@data-toggle='dropdown']//span[contains(.,'My account')] in youtube ref
  //*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span correct one

  //await page.click("text=Login")
  //or
  await page.click("'Login'");

  await page.fill(
    "//input[@placeholder='E-Mail Address']",
    "gokulpollachi25@gmail.com"
  );
  await page.fill("//input[@type='password']", "gokul25");
  await page.click("//input[@value='Login']");
  //await page.waitForTimeout(5000);

  //entering the profile section automatically using previous session
  //login success with old cache data
  //   const newpage = await context.newPage();
  //   await newpage.goto(
  //     "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  //   );
  //   await newpage.waitForTimeout(5000);

  //entering the profile section automatically using new browser,new session
  //login failed with old cache data

  //creating the new browser instance
  const newcontext = await browser.newContext();

  const newpage = await newcontext.newPage();
  await newpage.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"
  );
  //await newpage.waitForTimeout(5000);
});
