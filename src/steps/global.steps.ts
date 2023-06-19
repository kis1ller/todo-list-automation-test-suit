import { Then } from "@cucumber/cucumber";


Then(/^I expect the current URL to include the "(.*)" path$/,
    async (path: string): Promise<void> => {
        await expect(browser).toHaveUrlContaining(path);
    });
