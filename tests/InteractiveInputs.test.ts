import test, { expect } from "@playwright/test";


//use only annoattion to etst only one from multiple tests
//eg:test.only("",()=>{})

test("checking sum result from lamdatest playground",async({page}) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/simple-form-demo"
    )

    const sum1 = page.locator("#sum1")
    const sum2 = page.locator("#sum2")

    const sumBtn = page.locator("//button[text()='Get Sum']");

    let num1 = 234
    let num2 = 567
    
    await sum1.scrollIntoViewIfNeeded()     //scroll to destination and do actions
    //await page.waitForTimeout(1000)         //wait for 1 sec to see action
    await sum1.focus()
    await sum1.type(`${num1}`)          
    /* 
    type() appends the text with existing data in the field and types letter by letter
    fill() fill erases previous data and fills whole data in the lighning speed
    */

    //await page.waitForTimeout(1000);
    await sum2.focus()
    await sum2.type(`${num2}`)

    //await page.waitForTimeout(1000);
    await sumBtn.click()

    const result = page.locator("p#addmessage");
    console.log(result.textContent());
    
    //assertion
    let expectedRes = num1 + num2;
    expect(result).toHaveText(`${expectedRes}`)
    
})








test("checking the input type functionality in letcode",async({page})=>{
    await page.goto("https://letcode.in")

    //navigate from landing page to work space
    await page.click("//a[contains(text(),'Work-Space')]");

    //navigates from workspace to edit 
    await page.click("//a[contains(text(),'Edit')]");
    
    const nameInput = page.locator("input#fullName")
    await nameInput.scrollIntoViewIfNeeded()
    expect(nameInput).toHaveAttribute("placeholder", "Enter first & last name");
    await nameInput.type("Gokul Loganathan")

   // await page.waitForTimeout(2000)
})





test("testing textbox using playwright",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    
    const singleCheck = page.locator("//label[text()='Click on check box']")
    
    //asserted it is not checked 
    expect(singleCheck).not.toBeChecked()

    //await page.waitForTimeout(1000);
    
    //checking it now
    await singleCheck.check()

    //asserting it as checkout now
    expect(singleCheck).toBeChecked()

    //await page.waitForTimeout(1000)
})