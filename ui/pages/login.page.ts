export class LoginPage {
  constructor(private page) {}

  async open() {
    await this.page.goto('https://example.com/login');
  }

  async login(user: string, pass: string) {
    await this.page.fill('#username', user);
    await this.page.fill('#password', pass);
    await this.page.click('#login');
  }
}