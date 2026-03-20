const fs = require('fs');
const path = require('path');

async function juryReview(page, context) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const screenshotPath = path.join(__dirname, `jury/screenshot-${timestamp}.png`);
  const textPath = path.join(__dirname, `jury/draft-${timestamp}.txt`);
  const signalPath = path.join(__dirname, `jury/signal-${timestamp}.go`);

  if (!fs.existsSync(path.join(__dirname, 'jury'))) {
    fs.mkdirSync(path.join(__dirname, 'jury'));
  }

  // Take screenshot
  await page.screenshot({ path: screenshotPath, fullPage: true });

  // Try to extract draft text from the modal or form
  const draftText = await page.evaluate(() => {
    // Basic attempt to get text from common form containers
    const modal = document.querySelector('[role="dialog"], .workday-form-container, form');
    return modal ? modal.innerText : 'Could not extract draft text.';
  });

  const report = `
Jury Review Requested
Context: ${context}
Screenshot: ${screenshotPath}
Timestamp: ${timestamp}

Draft Text Content:
---
${draftText}
---
INSTRUCTIONS:
1. Review the screenshot and text.
2. If approved, create the file: ${signalPath}
3. The bot will wait until this file exists before clicking 'Submit'.
  `;

  fs.writeFileSync(textPath, report);
  console.log(`[Jury] Review files saved. Waiting for 'GO' signal at: ${signalPath}`);

  // Polling for the GO signal
  return new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      if (fs.existsSync(signalPath)) {
        clearInterval(checkInterval);
        console.log(`[Jury] 'GO' signal received! Proceeding with submission.`);
        resolve(true);
      }
    }, 5000); // Check every 5 seconds
  });
}

module.exports = { juryReview };
