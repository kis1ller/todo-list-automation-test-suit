import { Page } from "@base/page";

const pageCss = "#todoist_app";
const sidebarProjectsCss = `${pageCss} #left_menu #projects_list`;
const spanItemCss = "span";


class MainPage extends Page {
    private get sidebarProjects() {
        return $(sidebarProjectsCss);
    }
    private get spanItems() {
        return $(sidebarProjectsCss).$(spanItemCss);
    }

    async assertProjectsByLabel(label: string): Promise<void> {
        await this.sidebarProjects.waitForDisplayed();
        await expect(this.spanItems.nextElement()).toHaveText(label);
    }
}
export default new MainPage();
