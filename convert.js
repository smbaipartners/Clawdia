const fs = require('fs');
const lines = fs.readFileSync('globals/MED_LEADS.md', 'utf8').split('\n');
let csv = '';
for (let line of lines) {
  if (line.trim().startsWith('|') && !line.includes('---')) {
    const parts = line.split('|').map(p => p.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1);
    const csvLine = parts.map(p => `"${p.replace(/"/g, '""')}"`).join(',');
    csv += csvLine + '\n';
  }
}
fs.writeFileSync('globals/MED_LEADS.csv', csv);
console.log('done');
