import { Page, Locator } from '@playwright/test';

export class ImdbMenu {
  readonly page: Page;
  readonly moviesTop250MenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.moviesTop250MenuItem = page.getByRole('link', { name: 'Top 250 Movies' });
    this.moviesTop250MenuItem = page.locator('//*[@data-testid="panel-content"]//*[@data-testid="list-container"]//*[text()="Top 250 Movies"]');
  }
}
