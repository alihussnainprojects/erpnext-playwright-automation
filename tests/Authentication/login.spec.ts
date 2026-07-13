import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';

import { adminCredentials } from '../../test-data/credentials';


test('Administrator can log in successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(adminCredentials);

    await expect(page).toHaveURL(/.*desk.*/);

});