import {expect, Page} from '@playwright/test';
import {BasePage} from "./base.page";

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async login(user:any) {

        await this.loginEmailField.fill(user.email);
        await this.loginPasswordField.fill('Mih@jlo1');

        await this.loginSubmit.click();
        await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/account');
        await expect(this.page.locator('h1')).toHaveText('My account');
    }
}
