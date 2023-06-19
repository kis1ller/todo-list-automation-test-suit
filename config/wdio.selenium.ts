const confSel = require("./wdio.conf.ts").config;

confSel.services = [
    [
        "selenium-standalone",
        {
            skipSeleniumInstall: true, //Boolean for skipping server install.
        },
    ],
];

confSel.capabilities = [
    {
        browserName: "chrome",
        "goog:chromeOptions": {
            args: [
                "--start-maximized"
            ]
        },
    },
];

exports.config = confSel;
