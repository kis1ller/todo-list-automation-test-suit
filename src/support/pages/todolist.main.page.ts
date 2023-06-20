import { Page } from "@base/page";

const pageCss = "#todoist_app";
const sidebarProjectsCss = `${pageCss} #left_menu #projects_list`;
const spanFirstItemCss = "span";
const liFirstItemCss = "li[data-type='project_list_item']";
const buttonAddTaskCss = "#quick_add_task_holder";
const buttonSubmitAddTaskCss = "button[data-testid='task-editor-submit-button'][aria-disabled='false']";
const inputTaskNameCss = "div[aria-label='Task name']";
const divTasksCss = ".task_list_item__content";
const divFirstTaskCss = `${divTasksCss} .task_content`;

class MainPage extends Page {
    private get sidebarProjects() {
        return $(sidebarProjectsCss);
    }
    private get spanFirstItemCss() {
        return $(sidebarProjectsCss).$(spanFirstItemCss).nextElement();
    }
    get divTasks() {
        return $(divTasksCss);
    }
    get divFirstTask() {
        return $(divFirstTaskCss);
    }
    get liFirstItem() {
        return $(liFirstItemCss);
    }
    get buttonAddTask() {
        return $(buttonAddTaskCss);
    }
    get buttonSubmitAddTask() {
        return $(buttonSubmitAddTaskCss);
    }
    get inputTaskName() {
        return $(inputTaskNameCss);
    }

    async assertProjectsByLabel(label: string): Promise<void> {
        await this.sidebarProjects.waitForDisplayed();
        await expect(this.spanFirstItemCss).toHaveText(label);
    }

    async assertTaskByLabel(label: string): Promise<void> {
        await this.divTasks.waitForDisplayed();
        await expect(this.divFirstTask).toHaveText(label);
    }
}
export default new MainPage();
