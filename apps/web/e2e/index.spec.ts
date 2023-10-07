import { expect, test } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  await page.goto("/");
  await page.getByText("About").click();
  await expect(page).toHaveURL("/about");
});
