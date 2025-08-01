import {expect, Page, Locator} from '@playwright/test';

export class SigninPage {
    private signIn: Locator;
    private registerYourAccount: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private dob: Locator;
    private street: Locator;
    private city: Locator;
    private zipCode: Locator;
    private state: Locator;
    private country1: Locator;
    private country2: Locator;
    private phone: Locator;
    private email: Locator;
    private password: Locator;
    private submit: Locator;


    constructor(private page: Page) {
        this.signIn = page.locator('[data-test="nav-sign-in"]');
        this.registerYourAccount = page.locator('[data-test="register-link"]')
        this.firstName = page.locator('[data-test="first-name"]');
        this.lastName = page.locator('[data-test="last-name"]');
        this.dob = page.locator('[data-test="dob"]');
        this.street = page.locator('[data-test="street"]');
        this.city = page.locator('[data-test="city"]');
        this.zipCode = page.locator('[data-test="postal_code"]');
        this.state = page.locator('[data-test="state"]');
        this.country1 = page.locator('[data-test="country"]'); //[data-test="country"] // #country
        this.country2 = page.locator('#country');
        this.phone = page.locator('[data-test="phone"]');
        this.email = page.locator('[data-test="email"]');
        this.password = page.locator('[data-test="password"]');
        this.submit = page.locator('[data-test="register-submit"]');
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    async signin(user:any) {

        await this.signIn.click();
        await this.registerYourAccount.click();
        await this.firstName.fill(user.firstName);
        await this.lastName.fill(user.lastName);
        await this.dob.fill(user.dob);

        await this.street.fill(user.address.street);
        await this.city.fill(user.address.city);
        await this.zipCode.fill(user.address.zipCode);
        await this.state.fill(user.state);
        if (await this.country2.isVisible()) {
            await this.country2.selectOption(user.address.country);
        } else if (await this.country1.isVisible()) {
            await this.country1.selectOption(user.address.country);
        }
        //await this.country.selectOption(user.address.country);

        //const btn = page.locator('[data-test="nav-sign-in"], #signInButton').first();
        // await btn.click();

        await this.phone.fill(user.phone);
        await this.email.fill(user.email);
        await this.password.fill('Mih@jlo1');

        await this.submit.click();

        await expect(this.page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
    }
}