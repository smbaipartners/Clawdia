const { getData } = require('./data-provider');
const { juryReview } = require('./jury-manager');

/**
 * LinkedIn Easy Apply Module
 * Handles applying to LinkedIn jobs using the Easy Apply button.
 * 
 * @param {import('playwright').Page} page 
 * @param {string} jobUrl 
 */
async function linkedinApply(page, jobUrl) {
  const userData = getData();
  console.log(`[LinkedIn] Navigating to: ${jobUrl}`);
  await page.goto(jobUrl, { waitUntil: 'domcontentloaded' });
  
  try {
    const easyApplyButton = page.locator('button:has-text("Easy Apply"), button[aria-label*="Easy Apply"]').first();
    await easyApplyButton.waitFor({ timeout: 5000 });
    await easyApplyButton.click();
    console.log('[LinkedIn] Clicked Easy Apply button.');
    
    // Automation of modals
    let isLastStep = false;
    let iterations = 0;
    while (!isLastStep && iterations < 20) {
      iterations++;
      
      const submitButton = page.locator('button:has-text("Submit application"), button[aria-label*="Submit application"]').first();
      const nextButton = page.locator('button:has-text("Next"), button[aria-label*="Next"]').first();
      const reviewButton = page.locator('button:has-text("Review"), button[aria-label*="Review"]').first();
      
      // Check if we are at the final stage
      if (await submitButton.isVisible()) {
        isLastStep = true;
        console.log('[LinkedIn] At Submit stage. Requesting Jury Review...');
        
        const approved = await juryReview(page, 'LinkedIn Easy Apply Submit Stage');
        if (approved) {
          await submitButton.click();
          console.log('[LinkedIn] Application submitted!');
        }
        break;
      }
      
      // If not last step, try to fill fields and click Next/Review
      // LinkedIn usually autofills email and phone, but we can verify if needed
      // Most of the manual work is in custom questions, which are hard to automate 
      // without LLM help, but we'll fulfill the 'Next' button automation requirement.
      
      if (await reviewButton.isVisible()) {
        await reviewButton.click();
        console.log('[LinkedIn] Clicked Review button.');
      } else if (await nextButton.isVisible()) {
        await nextButton.click();
        console.log('[LinkedIn] Clicked Next button.');
      } else {
        console.log('[LinkedIn] No Next/Review/Submit button found. Breaking...');
        break;
      }
      
      await page.waitForTimeout(1000); // brief wait for animation/load
    }
  } catch (err) {
    console.log('[LinkedIn] Easy Apply process failed or button not found.');
    console.error(err.message);
  }
}

module.exports = linkedinApply;
