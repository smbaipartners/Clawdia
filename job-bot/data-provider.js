const fs = require('fs');
const path = require('path');

function getData() {
  const userPath = path.join(__dirname, '../USER.md');
  const resumePath = path.join(__dirname, '../globals/MASTER_RESUME.md');
  
  const userData = fs.readFileSync(userPath, 'utf8');
  const resumeData = fs.readFileSync(resumePath, 'utf8');
  
  // Extracting basic info using regex
  const nameMatch = resumeData.match(/\*\*Name:\*\*\s*(.*)/);
  const contactMatch = resumeData.match(/\*\*Contact:\*\*\s*(.*)/);
  const locationMatch = resumeData.match(/\*\*Location:\*\*\s*(.*)/);
  
  const name = nameMatch ? nameMatch[1].trim() : 'Kevin Graham';
  const location = locationMatch ? locationMatch[1].trim() : 'Poway, CA';
  
  let email = 'kevin@smbaipartners.com';
  let phone = '(858) 341-9719';
  
  if (contactMatch) {
    const contactInfo = contactMatch[1];
    const emailMatch = contactInfo.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/);
    const phoneMatch = contactInfo.match(/(\(\d{3}\)\s*\d{3}-\d{4})/);
    if (emailMatch) email = emailMatch[1];
    if (phoneMatch) phone = phoneMatch[1];
  }

  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  return {
    firstName,
    lastName,
    fullName: name,
    email,
    phone,
    location,
    resumePath
  };
}

module.exports = { getData };
