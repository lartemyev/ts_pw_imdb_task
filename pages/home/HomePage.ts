import { Page, Locator } from '@playwright/test';
import { ImdbMenu } from './menu/ImdbMenu';

export class HomePage {
  readonly page: Page;
  readonly menu: ImdbMenu;
  
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly menuButton: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.menu = new ImdbMenu(page);
    this.searchInput = page.getByTestId('suggestion-search');
    // this.searchButton = page.getByTestId('suggestion-search-button');
    this.searchButton = page.locator('//button[@id="suggestion-search-button"]');
    // this.menuButton = page.getByTestId('imdbHeader-navDrawerOpen');
    this.menuButton = page.locator('//*[@id="imdbHeader-navDrawerOpen"]/*[local-name()="svg"]');
  }

  public async open(): Promise<void> {
    await this.page.goto('/');
  }
}
