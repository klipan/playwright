import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import {SigninPage} from "../../pages/signin.page";
import {generateRandomUser} from "../../randomthings/dataGenerator";
import {saveUserToFile} from "../../randomthings/userStorage";

test('@positive login', async ({ page }) => {

    const signinPage = new SigninPage(page);
    const loginPage = new LoginPage(page);
    const user = generateRandomUser();
    saveUserToFile(user);
    await signinPage.goto();
    await signinPage.signin(user);
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
    await loginPage.login(user);
});