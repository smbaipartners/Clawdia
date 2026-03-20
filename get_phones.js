const urls = [
  'https://kalabatconstruction.com/',
  'https://www.dmbuildinc.com/',
  'https://www.crewbuilders.com/',
  'https://mcbrownconstruction.com/',
  'https://www.cookbuilder.com/',
  'https://sandiegogeneralcontracting.com/',
  'https://proservicesgeneralcontractors.com/',
  'https://sjbconstructioninc.com/',
  'https://ecomindedsolutions.com/',
  'https://www.larsremodeling.com/'
];
(async () => {
  for (let url of urls) {
    try {
      const res = await fetch(url);
      const text = await res.text();
      const match = text.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
      console.log(url, match ? match[0] : 'No number found');
    } catch (e) {
      console.log(url, 'Error');
    }
  }
})();
