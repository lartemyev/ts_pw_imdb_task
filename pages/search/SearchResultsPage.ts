import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly pageId: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageId = page.getByTestId('find-results-section-title');
  }

  async getMovie(movieTitle: string) {
    return this.page.getByRole('link', { name: movieTitle }).first();
    // return this.pageId.locator('//ul//li//a[text()="' + movieTitle + '"]').first();
  }
}
