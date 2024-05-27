import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://qa-test-todo-fa6994894c02.herokuapp.com/');
  await page.waitForLoadState('load');
});

test('Check if the page title is "TodoMVC: React"', async ({ page }) => {
  await expect(page).toHaveTitle(/TodoMVC: React/);
});

test('Add items, Mark some as completed and validate variency in todo-count', async ({ page }) => {
  // Add items to the to-do list
  const input = page.locator('#todo-input');
  await input.click();
  await input.fill('Task 1: generate test plan');
  await input.press('Enter');
  
  await input.fill('Task 2: write test cases');
  await input.press('Enter');
  
  await input.fill('Task 3: write automated script');
  await input.press('Enter');
  
  await input.fill('Task 4: run tests');
  await input.press('Enter');
  
  await input.fill('Task 5: generate test report');
  await input.press('Enter');
  
  await input.fill('Task 6: report bugs');
  await input.press('Enter');

  // Validate the count down of the items in the list
  const todoCount = page.locator('.todo-count');
  await expect(todoCount).toHaveText('6 items left!');

  // Mark the first and second tasks as completed
  const firstTaskCheckbox = page.locator('ul.todo-list > li:nth-child(1) .toggle');
  const secondTaskCheckbox = page.locator('ul.todo-list > li:nth-child(2) .toggle');
  await firstTaskCheckbox.click();
  await secondTaskCheckbox.click();

  // Delete completed task from to-do list
  const clearCompletedButton = page.locator('button.clear-completed');
  await clearCompletedButton.click();

  // Validate the count down of the items in the list after deleting completed tasks.
  await expect(todoCount).toHaveText('4 items left!');
});

test('Validating input fields (preventing empty to-do items)', async ({ page }) => {
  const input = page.locator('#todo-input');
  await input.click();
  await input.press('Enter');

  const todoItems = page.locator('ul.todo-list > li');
  await expect(todoItems).toHaveCount(0);
});
