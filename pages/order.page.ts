import {expect, Page} from '@playwright/test';
import { BasePage } from './base.page';

export class OrderFlow extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async order() {

        await this.home.click();
        await this.searchField.fill('Hammer');
        await this.search.click();
        await this.clickByText('Court Hammer');
        await this.quantity.fill('5');
        await this.addToCart.click();
        await expect(this.page.getByText(' Product added to shopping cart. ')).toBeVisible();

    }
}
