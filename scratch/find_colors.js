const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');

const imgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780163006422.png';

async function run() {
  try {
    const img = sharp(imgPath);
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    const colors = {};
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      const key = `${r},${g},${b}`;
      colors[key] = (colors[key] || 0) + 1;
    }
    
    // Sort colors by frequency
    const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    console.log('Top 15 colors (RGB and pixel count):');
    sorted.slice(0, 15).forEach(([color, count]) => {
      console.log(`RGB(${color}): ${count} pixels`);
    });
  } catch (err) {
    console.error(err);
  }
}

run();
