import { Page } from '@playwright/test';
import { HomePage } from '../../pages/home/HomePage';

export class HomePageSteps {
  private page: HomePage;

  constructor(page: Page) {
    this.page = new HomePage(page);
  }

  public async openPage(): Promise<void> {
    await this.page.open();
  }

  public async searchMovie(movieName: string): Promise<void> {
    await this.page.searchInput.fill(movieName);
    await this.page.searchButton.click();
  }

  public async clickTop250Movies(): Promise<void> {
    await this.page.menuButton.click();
    await this.page.menu.moviesTop250MenuItem.click();
  }
} 