import { Given, When, Then } from "@cucumber/cucumber";
import { TodoListApiV2Client } from "../support/api/todolist.api";
import LoginPage from "pages/todolist.login.page";
import MainPage from "pages/todolist.main.page";


// Background
Given(/^I have created a test project via API using following body:$/,
    async function (data: string) {
        const request = new TodoListApiV2Client();
        this.response = await request.postTodolistProject(data);
        if (this.response.data.id !== undefined) {
            if (global.projectIds === undefined)
                global.projectIds = [];
            global.projectIds.push(this.response.data.id);
        }
    });

// Step definitions for Scenario 1: Create Project
When(/^I login into the Todolist web application$/,
    async (): Promise<void> => {
        await LoginPage.login();
    });

Then(/^I should see the project named as "(.*)" in sidebar/,
    async (label: string): Promise<void> => {
        await MainPage.assertProjectsByLabel(label);
    });

// Step definitions for Scenario 2: Create Task via Web Application
When(/^I create a test task via the web application with name "(.*)"/,
    async (name: string): Promise<void> => {
        await MainPage.liFirstItem.waitForDisplayed();
        await MainPage.liFirstItem.click();
        await MainPage.buttonAddTask.waitForDisplayed();
        await MainPage.buttonAddTask.click();
        await MainPage.inputTaskName.waitForDisplayed();
        await MainPage.inputTaskName.setValue(name);
        await MainPage.buttonSubmitAddTask.waitForDisplayed();
        await MainPage.buttonSubmitAddTask.click();
    });

Then(/^The task with name "(.*)" should accessible correctly via the API/,
    async (label: string): Promise<void> => {
        const request = new TodoListApiV2Client();
        const response = await request.getTodolistTasks();
        await expect(response.data[0].content).toEqual(label);
    });

// Step definitions for Scenario 3: Create Task via API
When(/^I create a test task via the API using following name "(.*)"/,
    async function (label: string) {
        const request = new TodoListApiV2Client();
        this.response = await request.postTodolistTask(label);
    });

Then(/^The task with name "(.*)" should be visible on the web application/,
    async (label: string): Promise<void> => {
        await MainPage.liFirstItem.waitForDisplayed();
        await MainPage.liFirstItem.click();
        await MainPage.assertTaskByLabel(label);
    });
