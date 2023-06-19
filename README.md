# Todo List WebdriverIO E2E

This project is a boilerplate for e2e test automation using webdriverio v8.

## Getting started

The tests are written in behavior-driver development (BDD) style using Cucumber.

```gherkin
Scenario: Test Scenario for insert, click and validation
  Given The landing page is shown
   When I insert "test" in the text field
    And I press the search button
   Then I should see the next page
```

This is an example of a test case written in Cucumber, it has four different lines, one for each behavior that we want to test.

Then the connection between the Cucumber scenarios and the page objects is made using the step files, where each line can be mapped to functions. Both the step files and the page objects are written in Typescript.

```typescript
// makes the connection between the cucumber and the typescript
Given("the landing page is shown", (): void => {
    // calls the function for this step
    Page.open();
});
```

Finally we write the functions on page objects that call the Webdriver.io browser.

```typescript
    public open(): void {
        // loads the browser with the desired url
        browser.url(url);
    }
```

### Folder Structure

    .
    ├── config - Where the configuration files for webdriverio are stored
    │   ├── wdio.config.ts - Base configuration for the Webdriver.io
    │   ├── wdio.selenium.ts - Service and browser/devices capabilities to be used when testing
    │   └── wdio.headless.ts - Service and browser/devices capabilities to be used when testing
    ├── src
    │   ├── features - Where feature files are stored
    │   │   └── file_name.feature - File written in Cucumber for each feature
    │   ├── steps - Where the steps are stored
    │   │   └── file_name.steps.ts - Steps definition written in Typescript
    │   └── support - Where support files are stored
    │       ├── pages - Where page objects are stored
    │       │   └── file_name.ts - Page objects written in TypeScript
    │       └── hooks.ts - Cucumber hooks written in TypeScript
    ├── .eslintrc.json - Set of rules to be followed/enforced in TypeScript code
    ├── .gitignore - Configuration for files or folders to remain local
    ├── .prettierrc - Used with Prettier extension on VS Code so everyone uses the same code format
    ├── package.json - Configuration for scripts and dependencies
    ├── tsconfig.json - Configuration for the Typescript
    ├── properties.ts - Global configurations and variables to be used when testing
    └── Jenkisfile - Jenkins pipeline definition

## Setup

### Dependencies

-   [Node.js](http://nodejs.org/) - Works with are using node v16.13.0.
-   [Java](https://www.oracle.com/java/technologies/downloads/)

After that we only need to install the dev dependencies.

`npm install`

## Build

Run the TypeScript compiler

`npm run build`

### Lint

In order to keep some codebases, we should run a [static analysis tool](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

`npm run lint`

## Run

### Debug

The easiest way to run the tests is by pressing F5 when inside of a feature files, this is possible with the configurations present in the .vscode/launch.json together with VS Code.

### Running the test cases

Another way to run the test is by using the command line.

`npm run test`

Where "test" is the name of the script we want to run, this can be configured on the package.json file.

```json
"scripts": {
        "build": "tsc",
        "test": "wdio wdio.config.ts",
    },
```

This script runs the tests with the wdio.cong.ts configuration file.

The range of files to be tested can be configured in the wdio.config.ts as such:

```json
specs: ["./src/features/**/*.feature"],
```

This runs every feature file found inside of the src/features folder.

### Running only the test cases with certain tag

Depending on the test scope or due to a time limitation, we not always want to run the full e2e test automation.

So, we can mark certain scenarios with tags like:

-   @smoke-test
-   @regression-test

Then, we run the test by using the command line.

`npm run test -- --cucumberOpts.tagExpression '@smoke-test'`

## Browser capabilities

There are several configurations to specify the browser we want to use using the wdio.variables.ts file.
A simple way should be:

```javascript
capabilities: [
    // Browser name
    browserName: 'chrome',
]
```

Multiple browsers can be used at the same time.

```javascript
capabilities: [
    {
        // Browser name
        browserName: "chrome",
    },
    {
        // Browser name
        browserName: "firefox",
    },
];
```

## Report

At the end of the run, a onComplete piece of code was added to convert the .json report file generated to html.

```javascript
onComplete: () => {
    generate({
        jsonDir: variables.jsonReportFolder,
        reportPath: variables.htmlReportFolder,
        displayDuration: true,
        pageTitle: "Report",
        reportName: "Tests Report",
    });
};
```

### Report clean

When starting a new run, a onPrepare piece of code was added to clean the report folder of past runs.

```javascript
onPrepare: () => {
    removeSync(variables.reportFolder);
},
```

### Screenshot on error

After every step, we check the step status. If Failed we do a screenshot and attach it to the report.

```javascript
afterStep: function(step, scenario, result) {
    if (!result.passed) {
        cucumberJson.attach(browser.takeScreenshot(), "image/png");
    }
}
```

## Troubleshooting/Tips

Some common issues and tips.

### To avoid npm error exit status 1, run the entire command instead of the script

### Run only a test suite

Instead of running all tests we can run only a suite.

`wdio --suite login`

Suites can be configured on the wdio.config.ts file.

```javascript
suites: {
    login: ["./features/login/login.feature"];
}
```

### Build error node-gyp exited with code: 1

We have to make sure we are using a supported platform and node version.
Instead of having node latest version, the latest LTS version was locked.

## Built with

-   [Cucumber](https://cucumber.io/) - Open source tool to write business-readable tests.
-   [Typescript](https://www.typescriptlang.org/) - Open source programming language, syntactical superset of Javascript.
-   [Webdriver.io](https://webdriver.io/) - Test automation framework.

## IDE

-   [Visual Studio Code](https://code.visualstudio.com/download)

### VSCode useful extensions

-   [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
# todo-list-automation-test-suit
