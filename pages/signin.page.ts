import { Page } from '@playwright/test';

export class SigninPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async signin(user:any) {

        await this.page.click('[data-test="nav-sign-in"]');
        await this.page.click('[data-test="register-link"]');
        await this.page.fill('#first_name', user.firstName);
        await this.page.fill('#last_name', user.lastName);
        await this.page.fill('[data-test="dob"]', user.dob);

        await this.page.fill('#street', user.address.street);
        await this.page.fill('#city', user.address.city);
        await this.page.fill('#postal_code', user.address.zipCode);
        await this.page.fill('#state', user.state);
        await this.page.selectOption('[data-test="country"]', user.address.country); //[data-test="country"] // #country
        await this.page.fill('#phone', user.phone);
        await this.page.fill('[data-test="email"]', user.email);
        await this.page.fill('#password', 'Mih@jlo1');

        await this.page.click('button[type="submit"]');
    }
}