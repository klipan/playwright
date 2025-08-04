import { test } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import {SigninPage} from "../../pages/signin.page";
import {generateRandomUser} from "../../randomthings/dataGenerator";
import {saveUserToFile} from "../../randomthings/userStorage";
import {OrderFlow} from "../../pages/order.page";

test('@e2e order', async ({ page }) => {

    const signinPage = new SigninPage(page);
    const loginPage = new LoginPage(page);
    const user = generateRandomUser();
    saveUserToFile(user);
    const orderFlow = new OrderFlow(page);

    await signinPage.goto();
    await signinPage.signin(user);
    await loginPage.login(user);
    await orderFlow.order();
});