// checkLinks.js
const axios = require("axios");
const { villas } = require("./villas.node"); // Reference your node-compatible data

async function checkLink(url) {
  try {
    const res = await axios.head(url, {
      timeout: 10000,
      maxRedirects: 10,
      validateStatus: null
    });

    return {
      url,
      status: res.status,
      ok: res.status >= 200 && res.status < 400
    };
  } catch (err) {
    return {
      url,
      status: "ERROR",
      ok: false,
      message: err.message
    };
  }
}

(async () => {
  const results = await Promise.all(villas.map(v => checkLink(v.affiliateLink)));

  const broken = results.filter(r => !r.ok);

  console.log(`✅ Checked ${results.length} links`);
  console.log(`🚨 Found ${broken.length} broken links:\n`);
  broken.forEach(r => {
    console.log(`❌ ${r.url} → ${r.status} ${r.message || ""}`);
  });
})();
