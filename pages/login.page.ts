import {expect, Page} from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async login(user:any) {

        await this.page.fill('#email', user.email);
        await this.page.fill('#password', 'Mih@jlo1');

        await this.page.click('[data-test="login-submit"]');
        await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/account');
    }
}