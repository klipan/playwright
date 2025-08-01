import { test} from '@playwright/test';
import { SigninPage } from '../../pages/signin.page';
import { generateRandomUser } from '../../randomthings/dataGenerator';
import { saveUserToFile } from '../../randomthings/userStorage';

test('@positive signin', async ({ page }) => {
  const signinPage = new SigninPage(page);
  const user = generateRandomUser();
  saveUserToFile(user);
  await signinPage.goto();
  await signinPage.signin(user);

});