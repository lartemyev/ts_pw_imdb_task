import { test } from '@playwright/test';
import { HomePageSteps } from '../steps/home/HomePageSteps';
import { ChartsPageSteps } from '../steps/home/charts/ChartsPageSteps';
import { CardDetailsSteps } from '../steps/search/card/CardDetailsSteps';

test('Navigate Top 250 Movies and validate first movie details', async ({ page }) => {
  const homePageSteps = new HomePageSteps(page);    
  const chartsPageSteps = new ChartsPageSteps(page);
  const cardDetailsSteps = new CardDetailsSteps(page);

  await homePageSteps.openPage();
  await homePageSteps.clickTop250Movies();
  await chartsPageSteps.clickFirstMovie();

  await cardDetailsSteps.validateTitleIsVisible();
  await cardDetailsSteps.validateRatingIsVisible()
  await cardDetailsSteps.validateYearOfReleaseIsVisible();
});