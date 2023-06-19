import { reports } from "../../properties";
import { removeSync, existsSync } from "fs-extra";
import { TodoListApiV2Client } from "../support/api/todolist.api";
import cucumberJson from "wdio-cucumberjs-json-reporter";
const { generate } = require("multiple-cucumber-html-reporter");

export const hooks = {
    onPrepare: function () {
        // Clean the folder that holds the report files
        removeSync(reports.reportFolder);
    },
    beforeScenario: async function () {
        global.projectIds = [];
    },
    afterStep: async function (step: any, scenario: any, result: any) {
        if (!result.passed) {
            cucumberJson.attach(await browser.takeScreenshot(), "image/png");
        }
    },
    afterScenario: async function () {
        // Delete data created by the automated test in the scenario
        for (let i = 0; i < global.projectIds.length; i++) {
            const request = new TodoListApiV2Client();
            await request.deleteTodolistProject(global.projectIds[i]);
        }
    },
    onComplete: function () {
        // Generate the report when it all tests are done
        if (existsSync(reports.jsonReportFolder)) {
            generate({
                jsonDir: reports.jsonReportFolder,
                reportPath: reports.htmlReportFolder,
                displayDuration: true,
                pageTitle: "Report",
                reportName: "Tests Report",
                // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
            });
        }
    },
};
