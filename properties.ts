export const baseUrl = process.env.BASE_URL || "https://todoist.com";

const data = {
    todoApi: {
        baseUrlV2: "https://api.todoist.com/rest/v2",
        token: "ded11e9e0f43102a1f982812485a8b86075a6234"
    },
    todoCredentials: {
        username: "ethnosmm@gmail.com",
        password: "ethnotest"
    }
};
export const todoApi = data.todoApi;
export const credentials = data.todoCredentials;

export const reports = {
    reportFolder: "reports",
    jsonReportFolder: "reports/cucumberjs/",
    htmlReportFolder: "reports/html/"
};
