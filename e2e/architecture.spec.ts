import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Arden.*Cole|Architect/)
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    const projectsLink = page.getByRole('navigation').getByRole('link', { name: 'Projects' }).first()
    await expect(projectsLink).toBeVisible()
    await projectsLink.click()
    await expect(page).toHaveURL('/projects')
  })
})

test.describe('Projects Page', () => {
  test('displays projects from Drupal', async ({ page }) => {
    await page.goto('/projects')
    await expect(page).toHaveTitle(/Projects/)
    await expect(page.getByText('Riverside Civic Center').first()).toBeVisible()
  })
})

test.describe('Team Page', () => {
  test('displays team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page).toHaveTitle(/Team/)
    await expect(page.getByText('Lars Voss').first()).toBeVisible()
  })
})

test.describe('Awards Page', () => {
  test('displays awards from Drupal', async ({ page }) => {
    await page.goto('/awards')
    await expect(page).toHaveTitle(/Awards/)
    await expect(page.getByText('AIA National', { exact: false }).first()).toBeVisible()
  })
})

test.describe('News Page', () => {
  test('displays news from Drupal', async ({ page }) => {
    await page.goto('/news')
    await expect(page).toHaveTitle(/News/)
    await expect(page.getByText('London Studio', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/projects', '/team', '/awards', '/news']) {
      await page.goto(path)
      await expect(page.getByText('Arden', { exact: false }).first()).toBeVisible()
    }
  })
})
