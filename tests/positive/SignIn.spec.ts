import { test, expect } from '@playwright/test';
import { SigninPage } from '../../pages/signin.page';

test('@positive login with POM', async ({ page }) => {
  const signinPage = new SigninPage(page);
  await signinPage.goto();
  await signinPage.login();
  await expect(page).toHaveURL(/register/);
});