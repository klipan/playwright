import { test, expect } from '@playwright/test';
import { SigninPage } from '../../pages/signin.page';
import { generateRandomUser } from '../../randomthings/dataGenerator';
import { saveUserToFile } from '../../randomthings/userStorage';

test('@positive signin', async ({ page }) => {
  const signinPage = new SigninPage(page);
  const user = generateRandomUser();
  saveUserToFile(user);
  await signinPage.goto();
  await signinPage.signin(user);
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/login'); // investigate why /register/ is passing when login is proper
  await page.fill('#email', user.email);
  await page.fill('#password', 'Mih@jlo1');

  await page.click('[data-test="login-submit"]');
  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');
  await page.click('[data-test="ok"]');
});