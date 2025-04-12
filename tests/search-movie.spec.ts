import { test } from '@playwright/test';
import { SearchResultsSteps } from '../steps/search/SearchResultsSteps';
import { CardDetailsSteps } from '../steps/search/card/CardDetailsSteps';
import { HomePageSteps } from '../steps/home/HomePageSteps';

test('Search and validate movie', async ({ page }) => {
  const homePageSteps = new HomePageSteps(page);
  const searchResultsSteps = new SearchResultsSteps(page);
  const cardDetailsSteps = new CardDetailsSteps(page);

  const movieName = 'Inception';
  await homePageSteps.openPage();
  await homePageSteps.searchMovie(movieName);
  await searchResultsSteps.clickMovie(movieName);
  await cardDetailsSteps.validateTitle(movieName);
});
