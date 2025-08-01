import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    private loginSubmit: Locator;
    private loginEmailField: Locator;
    private loginPasswordField: Locator;

    constructor(private page: Page) {
    this.loginSubmit = page.locator('[data-test="login-submit"]');
    this.loginEmailField = page.locator('#email');
    this.loginPasswordField = page.locator('#password');

    }

    async login(user:any) {

        await this.loginEmailField.fill(user.email);
        await this.loginPasswordField.fill('Mih@jlo1');

        await this.loginSubmit.click();
        await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/account');
    }
}
