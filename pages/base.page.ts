import { Page, Locator } from '@playwright/test';

export class BasePage {
    constructor(protected page: Page) {}

    get home(): Locator {
        return this.page.locator('[data-test="nav-home"]');
    }
    get searchField(): Locator {
        return this.page.locator('#search-query');
    }
    async clickByText(text: string) {
        await this.page.getByText(text).click();
    }
    get quantity(): Locator {
        return this.page.locator('#quantity-input');
    }
    get addToCart(): Locator {
        return this.page.locator('[data-test="add-to-cart"]');
    }
    get search(): Locator {
        return this.page.locator('[data-test="search-submit"]');
    }
    get loginEmailField() : Locator{
        return this.page.locator('#email');
    }
    get loginPasswordField(): Locator{
        return this.page.locator('#password');
    }
    get loginSubmit(): Locator {
        return this.page.locator('[data-test="login-submit"]');
    }
}