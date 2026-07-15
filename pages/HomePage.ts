import { Locator, Page } from '@playwright/test';

export class HomePage {


    private readonly userMenu: Locator;

    private readonly logoutButton: Locator;

    private readonly confirmLogoutButton: Locator;

    constructor(page: Page) {

        this.userMenu = page.locator('.desktop-avatar');

        this.logoutButton = page.getByText('Logout', { exact: true });

        this.confirmLogoutButton = page.getByRole('button', { name: 'Yes' });

    }

    async logout(): Promise<void> {

        await this.userMenu.click();

        await this.logoutButton.click();

        await this.confirmLogoutButton.click();

    }

}