const confChromeDriver = require("./wdio.conf.ts").config;

confChromeDriver.services = [
    [
        "chromedriver", {
            args: [
                "--silent"
            ]
        }
    ],
];

confChromeDriver.capabilities = [
    {
        browserName: "chrome",
        "goog:chromeOptions": {
            args: [
                "--no-sandbox",
                "--start-maximized",
                "--window-size=1920,1080",
                "--disable-dev-shm-usage",
                "--headless"
            ]
        },
    },
];

exports.config = confChromeDriver;
