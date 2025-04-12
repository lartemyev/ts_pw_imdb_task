import { Locator, Page, expect } from '@playwright/test';

export class CardDetailsPage {
  readonly page: Page;
  readonly pageId: Locator;  
  // readonly rating: Locator;
  // readonly yearOfRelease: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageId = page.getByTestId('hero-parent');
//     this.rating = this.title.locator('/../../following-sibling::div//*[contains(@data-testid,"rating__score")]');
//     this.yearOfRelease = this.title.locator('/../following-sibling::ul/li[1]/a');
  }

    async getTitle() {      
      // return this.pageId.locator("//h1[contains(@data-testid,'pageTitle')]/span");
      return this.pageId.getByTestId('hero__pageTitle').locator('span');
    }

    async getRating() {
      // const titleId = await this.getTitle();
      // return titleId.locator("//../../following-sibling::div//*[contains(@data-testid,'rating__score')]/span[1]");
      return this.page.getByTestId('hero-rating-bar__aggregate-rating__score').locator('span').first()
  }

  async getYearOfRelease() {
    const titleId = await this.getTitle();
    return titleId.locator("//../following-sibling::ul/li[1]/a");
  }
}
