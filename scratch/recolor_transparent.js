const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');
const path = require('path');

const imgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780163006422.png';
const outputDir = 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images';

async function processLogo(colorHex, outName) {
  try {
    const targetR = parseInt(colorHex.slice(1, 3), 16);
    const targetG = parseInt(colorHex.slice(3, 5), 16);
    const targetB = parseInt(colorHex.slice(5, 7), 16);

    const img = sharp(imgPath).trim().ensureAlpha();
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    console.log(`Recoloring ${outName} to ${colorHex} (${info.width}x${info.height}):`);
    
    // Create new buffer for processed image
    const outBuffer = Buffer.alloc(info.width * info.height * 4);
    
    let transparentCount = 0;
    let opaqueCount = 0;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const grayscale = (r + g + b) / 3;
      
      let alpha = 0;
      if (grayscale < 250) {
        // Linearly interpolate alpha from 0 at grayscale 250 to 255 at grayscale 120
        alpha = Math.round((250 - grayscale) / (250 - 120) * 255);
        alpha = Math.min(255, Math.max(0, alpha));
      }
      
      outBuffer[i] = targetR;
      outBuffer[i + 1] = targetG;
      outBuffer[i + 2] = targetB;
      outBuffer[i + 3] = alpha;
      
      if (alpha === 0) transparentCount++;
      else opaqueCount++;
    }
    
    console.log(`- Pixels: transparent=${transparentCount}, visible=${opaqueCount}`);
    
    // Write out as transparent WebP
    await sharp(outBuffer, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .webp({ quality: 100 })
    .toFile(path.join(outputDir, outName));
    
    console.log(`- Saved transparent WebP to ${outName}`);
  } catch (err) {
    console.error(`- Error processing ${outName}:`, err);
  }
}

async function run() {
  await processLogo('#242736', 'logo-emblem-2.webp'); // Header
  await processLogo('#FFFFFF', 'logo-emblem-1.webp'); // Footer
}

run();
