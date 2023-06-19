import { Page } from "@base/page";
import { credentials, baseUrl } from "properties";

const pageCss = "#todoist_app";
const inputEmailСss = "input[type='email']";
const inputPasswordCss = "input[type='password']";
const buttonSubmitCss = "button[type='submit']";

class LoginPage extends Page {

    private get page() {
        return $(pageCss);
    }

    private get inputEmail() {
        return $(inputEmailСss);
    }

    private get inputPassword() {
        return $(inputPasswordCss);
    }

    private get buttonSubmit() {
        return $(buttonSubmitCss);
    }

    async login(): Promise<void> {
        await browser.url(`${baseUrl}/auth/login`);
        await this.page.waitForDisplayed();
        await this.inputEmail.setValue(credentials.username);
        await this.inputPassword.setValue(credentials.password);
        await this.buttonSubmit.click();
    }

}
export default new LoginPage();
