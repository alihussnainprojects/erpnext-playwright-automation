import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';

import { HomePage } from '../../pages/HomePage';

import { adminCredentials, invalidPasswordCredentials, invalidUsernameCredentials, emptyUsernameCredentials, emptyPasswordCredentials, emptyCredentials } from '../../test-data/credentials';


test('Administrator can log in successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(adminCredentials);

    await expect(page).toHaveURL(/.*desk.*/);

});


test('User cannot log in with an invalid password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(invalidPasswordCredentials);

    await expect(await loginPage.getErrorMessage()).toContain('Invalid Login. Try again.');

});


test('User cannot log in with an invalid username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(invalidUsernameCredentials);

    await expect(await loginPage.getErrorMessage()).toContain('Invalid Login. Try again.');

});


test('User cannot log in with an empty username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(emptyUsernameCredentials);

    expect(await loginPage.isUsernameValueMissing()).toBe(true);

});


test('User cannot log in with an empty password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(emptyPasswordCredentials);

    expect(await loginPage.isPasswordValueMissing()).toBe(true);

});


test('User cannot log in with both username and password empty', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(emptyCredentials);

    expect(await loginPage.isUsernameValueMissing()).toBe(true);

    expect(await loginPage.isPasswordValueMissing()).toBe(true);

});




test('Administrator can log out successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const homePage = new HomePage(page);

    await loginPage.navigate();

    await loginPage.login(adminCredentials);

    await homePage.logout();

    await expect(page).toHaveURL(/.*login.*/);

});