import {expect, Page} from '@playwright/test';
import {BasePage} from "./base.page";
import {testData} from "../data.file";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async login(user:any) {

        await this.loginEmailField.fill(user.email);
        await this.loginPasswordField.fill(testData.user.password);

        await this.loginSubmit.click();
        await expect(this.page).toHaveURL(testData.urls.account);
        await expect(this.page.locator('h1')).toHaveText('My account');
    }
}
