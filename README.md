🎯 Test Automation Engineer Task (TS + Playwright)
📝 Task Overview:
Build a small test automation framework using Playwright with TypeScript. Apply the Page Object Model (POM) structure. Avoid using XPath/CSS based locators, use Playwright's location methods instead(getByRole, getByTestId etc). Write automated tests for a couple of common user flows on the IMDb website.

📦 Requirements
1. Framework Setup
Use Playwright with TypeScript.

Organize the project using Page Object Model.

Add basic test configuration with Playwright's config file:
Browser setup
Reporter setup
Base URL


🔄 Test Scenarios
✅ Test Case 1: Search and Validate Movie
Navigate to the IMDb homepage.
Search for a movie title (e.g., Inception).
Click on the movie from the search results.
Validate that the movie title on the details page matches the search keyword.

✅ Test Case 2: Navigate Top 250 Movies
Go to the IMDb Top 250 Movies page (via menu).
Click on the first movie in the list.

Validate:
Movie title is visible.
Rating is displayed.
Year of release is shown.
