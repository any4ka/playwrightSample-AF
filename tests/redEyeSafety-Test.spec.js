const { test, expect } = require('@playwright/test');
const { RedEyeSafety_PO } = require('../common/redEyeSafety_PO')

test('test Red Eye Safety', async ({ page }) => {
  const redEyeSafety_PO = new RedEyeSafety_PO(page);
  await page.goto('https://www.google.com/search?q=red+eye+safety&oq=red+eye+safety+&aqs=chrome..69i57.7190j0j2&sourceid=chrome&ie=UTF-8');
  await redEyeSafety_PO.googleResultLink.click();
  await redEyeSafety_PO.ppeLink.click();
  await redEyeSafety_PO.safetyTrainingLink.click();
  await redEyeSafety_PO.drugScreening.click();
  await redEyeSafety_PO.fireExtinguishersLink.click();
  await redEyeSafety_PO.additionalServicesLink.click();
  await redEyeSafety_PO.contactUsLink.click();
  await redEyeSafety_PO.fillOutForm('test', 'test@test.com', 'blue', 'hi \n\n how are you?\n\ntest');
});