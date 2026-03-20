const fs = require('fs');
const lines = fs.readFileSync('globals/CONSTRUCTION_LEADS.md', 'utf8').split('\n');
lines.forEach(l => {
  if (l.includes('|') && !l.includes('Company Name') && !l.includes('---')) {
    const parts = l.split('|').map(s => s.trim());
    if (parts.length > 2) {
      console.log(`- **${parts[1]}**: ${parts[2]} \n  Notes: ${parts[4]}`);
    }
  }
});
