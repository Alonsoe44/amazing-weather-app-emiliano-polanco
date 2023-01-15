/* eslint-disable testing-library/prefer-screen-queries */

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  const browserContext = await page.context();
  await page.goto("localhost:3000");
  await browserContext.grantPermissions(["geolocation"]);

  await expect(page).toHaveTitle(/Sunny day/);
});

test("get started link", async ({ page }) => {
  const browserContext = await page.context();
  await page.goto("localhost:3000");
  await browserContext.grantPermissions(["geolocation"]);

  const heading = await page.getByRole("heading", { name: /xativa/i });
  const link = await page.getByRole("link", { name: /details/i });

  // Expects the URL to contain intro.
  await expect(heading).toBeVisible();
  await expect(link).toBeVisible();
});
