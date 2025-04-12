import { Page, expect } from '@playwright/test';
import { ChartsPage } from '../../pages/home/charts/ChartsPage';

export class ChartsPageSteps {
  private page: ChartsPage;

  constructor(page: Page) {
    this.page = new ChartsPage(page);
  }

  public async clickFirstMovie(): Promise<void> {
    const firstCard = await this.page.getFirstCard();
    await (await this.page.getCardTitle(firstCard)).click();
  }
} 