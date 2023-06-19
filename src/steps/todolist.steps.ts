import { Given, When, Then } from "@cucumber/cucumber";
import { TodoListApiV2Client } from "../support/api/todolist.api";
import LoginPage from "pages/todolist.login.page";
import MainPage from "pages/todolist.main.page";

// Step definitions for Scenario 1: Create Project

Given(/^I have created a test project via API:$/,
    async function (data: string) {
        const request = new TodoListApiV2Client();
        this.response = await request.postTodolistProject(data);
        if (this.response.data.id !== undefined) {
            if (global.projectIds === undefined)
                global.projectIds = [];
            global.projectIds.push(this.response.data.id);
        }
    });

When(/^I login into the web application$/,
    async (): Promise<void> => {
        await LoginPage.login();
    });

Then(/^I should see the project named as "(.*)" in sidebar/,
    async (label: string): Promise<void> => {
        await MainPage.assertProjectsByLabel(label);
    });
