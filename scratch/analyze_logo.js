const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');
const path = require('path');

const imgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780163006422.png';

async function run() {
  try {
    const img = sharp(imgPath);
    const metadata = await img.metadata();
    console.log('Metadata:', metadata);
  } catch (err) {
    console.error(err);
  }
}

run();
