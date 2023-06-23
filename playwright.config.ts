import { defineConfig, devices } from "@playwright/test";

//run entire test file in single folder use testDir
//run specific files in a folder use testMatch array containing required tests file
export default defineConfig({
  testDir: "./tests",
  // testMatch: [
  //   "tests/Select.test.ts",
  //   'tests/Alert.test.ts',
  //   'tests/InteractiveInputs.test.ts',
  //   'tests/Generated.test.ts',
  //   'tests/lamdaTestLogin.test.ts',
  // ],
  //fullyParallel:false,
  use: {
    headless: false, //to see output in browser live
    screenshot: "on",
    video: "retain-on-failure",
    /* to eliminate all waitForTimeout() used for seeing output in human eye */
    /* use this property */

    /*  Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going
    on */
    launchOptions: {
      slowMo: 1000,
    },
  },

  //generate test report in multiple formats json,html,dot
  reporter: [
    [
      "html",
      {
        open: "on-failure",
      },
    ],
  ],
  retries: 0, //number of retries if test fails
});
