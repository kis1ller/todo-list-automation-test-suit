const confHeadless = require("./wdio.conf.ts").config;

confHeadless.capabilities = [
    {
        browserName: "chrome",
        "goog:chromeOptions": {
            args: [
                "--start-maximized",
                "--headless"
            ]
        },
    },
];

exports.config = confHeadless;
