const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');
const path = require('path');

const imgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780163006422.png';
const outputDir = 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images';

async function recolorRaw(colorHex, outName) {
  try {
    const r = parseInt(colorHex.slice(1, 3), 16);
    const g = parseInt(colorHex.slice(3, 5), 16);
    const b = parseInt(colorHex.slice(5, 7), 16);

    const img = sharp(imgPath).trim().ensureAlpha();
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    console.log(`Processing ${outName}:`, info.width, 'x', info.height, 'channels:', info.channels);
    
    // Modify RGB but keep Alpha
    for (let i = 0; i < data.length; i += info.channels) {
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
    }
    
    // Write out as WebP
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: info.channels
      }
    })
    .webp({ quality: 100 })
    .toFile(path.join(outputDir, outName));
    
    console.log(`Successfully wrote recolored transparent WebP to ${outName}`);
  } catch (err) {
    console.error(`Error processing ${outName}:`, err);
  }
}

async function run() {
  await recolorRaw('#242736', 'logo-emblem-2.webp'); // Header (dark slate/charcoal)
  await recolorRaw('#FFFFFF', 'logo-emblem-1.webp'); // Footer (white)
}

run();
