const { chromium } = require('playwright');
const linkedinApply = require('./linkedin');
const workdayApply = require('./workday');
const { getData } = require('./data-provider');

(async () => {
  // Command to start macOS Chrome with debugging port:
  // /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
  console.log('Connecting to local macOS Chrome on port 9222...');
  
  try {
    // Connect to the existing Chrome instance using Chrome DevTools Protocol (CDP)
    const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');
    console.log('Successfully connected to Chrome!');
    
    // Get the default context from the running browser
    const defaultContext = browser.contexts()[0];
    
    // Open a new tab for our operations
    const page = await defaultContext.newPage();
    console.log('Opened a new tab for automation.');
    
    const userData = getData();
    console.log(`Loaded User: ${userData.fullName} (${userData.email})`);

    // --- EXECUTION COMMANDS ---
    // Uncomment these as needed by the user.
    // Example LinkedIn apply:
    await linkedinApply(page, 'https://www.linkedin.com/jobs/view/4166687834');
    
    // Example Workday apply:
    // await workdayApply(page, 'https://EXAMPLE.myworkdayjobs.com/en-US/company/job/EXAMPLE_JOB_ID');
    
    console.log('Finished operations. Closing tab...');
    await page.close();
    
    // Disconnect (do not close the user's entire browser)
    await browser.close();
    console.log('Disconnected from Chrome.');
  } catch (err) {
    console.error('Failed to connect to Chrome. Make sure it is open and started with --remote-debugging-port=9222');
    console.error(err.message);
  }
})();
