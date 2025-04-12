import { Page, expect } from '@playwright/test';
import { CardDetailsPage } from '../../../pages/search/card/CardDetailsPage';

export class CardDetailsSteps {
  private page: CardDetailsPage;

  constructor(page: Page) {
    this.page = new CardDetailsPage(page);
  }

  async validateTitle(expectedTitle: string) {    
    await expect(await this.page.getTitle()).toHaveText(expectedTitle);
  }

  async validateTitleIsVisible() {
    await expect(await this.page.getTitle()).toBeVisible();
  }

  async validateRatingIsVisible() {
    await expect(await this.page.getRating()).toBeVisible();
  }

  async validateYearOfReleaseIsVisible() {
    await expect(await this.page.getYearOfRelease()).toBeVisible();
  }
} 