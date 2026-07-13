import { Page, Locator } from '@playwright/test';
import { URLs } from '../constants/urls';
import { Credentials } from '../types/Credentials';


export class LoginPage {

    private readonly page: Page;

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator('#login_email');
        this.passwordInput = page.locator('#login_password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }



    async navigate(): Promise<void> {
        await this.page.goto(URLs.BASE_URL);
    }




    async login(credentials: Credentials): Promise<void> {
        await this.usernameInput.fill(credentials.username);
        await this.passwordInput.fill(credentials.password);
        await this.loginButton.click();
    }



}