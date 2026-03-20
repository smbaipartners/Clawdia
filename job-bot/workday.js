const { getData } = require('./data-provider');
const { juryReview } = require('./jury-manager');

/**
 * Generic Workday ATS Direct Apply Module
 * Handles applying to Workday ATS portals (used by many Fortune 500 companies).
 * 
 * @param {import('playwright').Page} page 
 * @param {string} jobUrl 
 */
async function workdayApply(page, jobUrl) {
  const userData = getData();
  console.log(`[Workday] Navigating to: ${jobUrl}`);
  await page.goto(jobUrl, { waitUntil: 'domcontentloaded' });
  
  try {
    // Click initial apply button
    const applyButton = page.locator('[data-automation-id="applyNowButton"], a:has-text("Apply")').first();
    await applyButton.waitFor({ timeout: 5000 });
    await applyButton.click();
    console.log('[Workday] Clicked Apply button.');
    
    // Choose Apply Manually
    const applyManually = page.locator('[data-automation-id="applyManually"], button:has-text("Apply Manually")').first();
    await applyManually.waitFor({ timeout: 5000 });
    await applyManually.click();
    console.log('[Workday] Clicked Apply Manually.');

    // Wait for the form to appear
    await page.waitForTimeout(3000);

    // Standard field mapping for Workday (Automation IDs often match across companies)
    const fieldMapping = {
      '[data-automation-id="legalNameSection_firstName"]': userData.firstName,
      '[data-automation-id="legalNameSection_lastName"]': userData.lastName,
      '[data-automation-id="contactInformationSection_email"]': userData.email,
      '[data-automation-id="contactInformationSection_phoneNumber"]': userData.phone,
      // Workday location often uses a dropdown/search, but let's try standard text
      '[data-automation-id="contactInformationSection_addressLine1"]': userData.location
    };

    for (const [selector, value] of Object.entries(fieldMapping)) {
      try {
        const input = page.locator(selector).first();
        if (await input.isVisible()) {
          await input.fill(value);
          console.log(`[Workday] Filled field: ${selector} with: ${value}`);
        }
      } catch (e) {
        console.log(`[Workday] Could not fill field ${selector}: ${e.message}`);
      }
    }

    // Step navigation (Workday typically uses 'Save and Continue')
    const nextButton = page.locator('[data-automation-id="bottomNavigation-next-button"], button:has-text("Save and Continue")').first();
    const submitButton = page.locator('[data-automation-id="bottomNavigation-submit-button"], button:has-text("Submit")').first();

    // Loop through steps until Submit is visible
    let steps = 0;
    while (!(await submitButton.isVisible()) && steps < 10) {
      steps++;
      if (await nextButton.isVisible()) {
        await nextButton.click();
        console.log(`[Workday] Navigated to step ${steps + 1}.`);
        await page.waitForTimeout(2000); // Wait for page transition
      } else {
        break;
      }
    }

    if (await submitButton.isVisible()) {
      console.log('[Workday] At Submit stage. Requesting Jury Review...');
      const approved = await juryReview(page, 'Workday Apply Submit Stage');
      if (approved) {
        await submitButton.click();
        console.log('[Workday] Application submitted!');
      }
    } else {
      console.log('[Workday] Submit button never appeared. Manual intervention may be needed.');
    }

  } catch (err) {
    console.log('[Workday] Application process failed or button not found.');
    console.error(err.message);
  }
}

module.exports = workdayApply;
