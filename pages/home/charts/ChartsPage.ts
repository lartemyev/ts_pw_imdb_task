import { Page, Locator } from '@playwright/test';

export class ChartsPage {
  readonly page: Page;
  readonly pageId: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageId = page.getByTestId('chart-layout-main-column');
  }

  async getFirstCard() {
     // return this.pageId.getByRole('listitem').first();
     return this.pageId.locator("//ul/li//*[contains(@class,'cli-parent')]").first();
  }

  async getCardTitle(cardId: Locator) {
    return cardId.getByRole('heading', { level: 3 }).first();
  }
}
