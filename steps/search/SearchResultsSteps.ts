import { Page } from '@playwright/test';
import { SearchResultsPage } from '../../pages/search/SearchResultsPage';

export class SearchResultsSteps {
  private page: SearchResultsPage;

  constructor(page: Page) {
    this.page = new SearchResultsPage(page);
  }

  public async clickMovie(movieName: string): Promise<void> {
    const movieElement = await this.page.getMovie(movieName);
    await movieElement.click();
  }
} 