const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');
const path = require('path');

const lightImgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780165371029.png';
const darkImgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780165371053.png';
const outputDir = 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images';

async function convert(srcPath, outName) {
  try {
    const img = sharp(srcPath).trim();
    const metadata = await img.metadata();
    console.log(`Converting ${path.basename(srcPath)}: trimmed to ${metadata.width}x${metadata.height}`);
    
    await img
      .webp({ quality: 100 })
      .toFile(path.join(outputDir, outName));
      
    console.log(`Saved optimized WebP to ${outName}`);
  } catch (err) {
    console.error(`Error converting ${outName}:`, err);
  }
}

async function run() {
  await convert(lightImgPath, 'logo-emblem-1.webp'); // Light logo (footer)
  await convert(darkImgPath, 'logo-emblem-2.webp');   // Dark logo (header)
}

run();
