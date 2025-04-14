🎯 Test Automation Engineer Task (TS + Playwright)

📝 Task Overview:
Build a small test automation framework using Playwright with TypeScript. Apply the Page Object Model (POM) structure. Avoid using XPath/CSS based locators, use Playwright's location methods instead(getByRole, getByTestId etc). Write automated tests for a couple of common user flows on the IMDb website.

📦 Requirements
1. Framework Setup
Use Playwright with TypeScript.
2. Organize the project using Page Object Model.
3. Add basic test configuration with Playwright's config file:
  - Browser setup
  - Reporter setup
  - Base URL


🔄 Test Scenarios

✅ Test Case 1: 

1. Search and Validate Movie
2. Navigate to the IMDb homepage.
3. Search for a movie title (e.g., Inception).
4. Click on the movie from the search results.

**Validate**

- Movie title on the details page matches the search keyword.

✅ Test Case 2:

1. Navigate Top 250 Movies
2. Go to the IMDb Top 250 Movies page (via menu).
3. Click on the first movie in the list.

**Validate**

- Movie title is visible.
- Rating is displayed.
- Year of release is shown.

**NOTE**: Look for execution results in Pull request: https://github.com/lartemyev/ts_pw_imdb_task/pull/1
