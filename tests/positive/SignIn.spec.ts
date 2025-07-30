import { test, expect } from '@playwright/test';
import { SigninPage } from '../../pages/signin.page';

test('@positive signin', async ({ page }) => {
  const signinPage = new SigninPage(page);
  await signinPage.goto();
  await signinPage.signin();
  await expect(page).toHaveURL(/register/);
});