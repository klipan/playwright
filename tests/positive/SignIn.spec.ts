import { test, expect } from '@playwright/test';
import { SigninPage } from '../../pages/signin.page';
import { LoginPage } from '../../pages/login.page';
import { generateRandomUser } from '../../randomthings/dataGenerator';
import { saveUserToFile } from '../../randomthings/userStorage';

test('@positive signin', async ({ page }) => {
  const signinPage = new SigninPage(page);
  const loginPage = new LoginPage(page);
  const user = generateRandomUser();
  saveUserToFile(user);
  await signinPage.goto();
  await signinPage.signin(user);

  await loginPage.login(user);

});