import { baseUrl, reports } from "../properties";
import { hooks } from "../src/support/hooks";

export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: "local",
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: ["./../src/features/**/*.feature"],
    // Patterns to exclude.
    exclude: [],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: baseUrl,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 60000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [],

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: "cucumber",
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: [
        [
            "cucumberjs-json",
            {
                jsonFolder: reports.jsonReportFolder,
            },
        ],
    ],
    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        requireModule: ["tsconfig-paths/register.js"],
        require: ["./src/steps/**/*.ts"],
        backtrace: true,
        dryRun: false,
        failFast: false,
        format: ["pretty"],
        colors: true,
        snippets: false,
        source: false,
        profile: [],
        strict: true,
        tagExpression: "",
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    // For convenience, if ts-node or @babel/register modules are detected
    // they are automatically loaded for config parsing so that TypeScript and
    // future ES features can be used in wsdio configs, and are also
    // automatically loaded for test running so that tests can be written
    // using TypeScript and future ES features.
    // Because this may not be ideal in every situation, the following options
    // may be used to customize the loading for test running, incase it has
    // other requirements.
    autoCompileOpts: {
        //
        // To disable auto-loading entirely set this to false.
        autoCompile: true,
        //
        // If you have ts-node installed, you can customize how options are passed to it here:
        // Any valid ts-node config option is allowed. Alternatively the ENV Vars could also be used instead of this.
        // See also: https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // See also RegisterOptions in https://github.com/TypeStrong/ts-node/blob/master/src/index.ts
        tsNodeOpts: {
            transpileOnly: false,
            project: "tsconfig.json",
            files: true,
        },
    },
    ...hooks,
};
