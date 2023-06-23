import test from "@playwright/test";

test("selectio option testing", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  //   await page.selectOption("select#select-demo", {
  //     label: "Wednesday",
  //   });

  await page.selectOption("select#select-demo", {
    index: 5, //will choose thursday for index 5
  });

  //   await page.selectOption("select#select-demo", {
  //     value: "Thursday",
  //   });

  //await page.waitForTimeout(2000);
});

test("select mutliple option testing", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );

  //   await page.selectOption("select#select-demo", {
  //     label: "Wednesday",
  //   });

  await page.selectOption("#multi-select", [
    { index: 2 },
    { index: 4 },
    {
      index: 5, //will choose thursday for index 5
    },
  ]);

  //   await page.selectOption("select#select-demo", {
  //     value: "Thursday",
  //   });

  //await page.waitForTimeout(2000);
});

test.only("checking the test jquery", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo"
  )

  await setCountry("India")
  await setCountry("Denmark")
  await setCountry("Hong Kong")

  //creating a async function to repeat same functionallity for three different inputs
  async function setCountry(country:string) { 
      await page.click("(//span[@class='selection']//span)[1]");
      await page.locator("#select2-country-results").locator("li", {
          hasText: country,
        }).click();
        //await page.waitForTimeout(1000);
    }
});
