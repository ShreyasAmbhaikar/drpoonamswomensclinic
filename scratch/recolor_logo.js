const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');
const path = require('path');

const imgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780163006422.png';
const outputDir = 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images';

async function recolor(colorHex, outName) {
  try {
    // 1. Get raw alpha channel of the original image
    const orig = sharp(imgPath);
    const metadata = await orig.metadata();
    
    // We trim the image first to remove extra white/transparent border
    const trimmed = orig.trim();
    const trimmedBuffer = await trimmed.toBuffer();
    const trimmedMetadata = await sharp(trimmedBuffer).metadata();
    
    const { width, height } = trimmedMetadata;
    console.log(`Trimmed size: ${width}x${height}`);
    
    // Get the alpha channel buffer of the trimmed image
    const alphaBuffer = await sharp(trimmedBuffer)
      .ensureAlpha()
      .extractChannel('alpha')
      .raw()
      .toBuffer();
      
    // Create a solid color image of the same size
    const solid = await sharp({
      create: {
        width,
        height,
        channels: 3,
        background: colorHex
      }
    })
    .raw()
    .toBuffer();
    
    // Join the solid color image with the alpha channel
    await sharp(solid, {
      raw: {
        width,
        height,
        channels: 3
      }
    })
    .joinChannel(alphaBuffer, {
      raw: {
        width,
        height,
        channels: 1
      }
    })
    .webp({ quality: 100 })
    .toFile(path.join(outputDir, outName));
    
    console.log(`Saved recolored logo to ${outName} with color ${colorHex}`);
  } catch (err) {
    console.error(`Error processing ${outName}:`, err);
  }
}

async function run() {
  // Header logo: primary color #242736
  await recolor('#242736', 'logo-emblem-2.webp');
  // Footer logo: white or light blue outline. Let's make it white (#FFFFFF) or light accent-secondary (#D8E4EA)
  await recolor('#FFFFFF', 'logo-emblem-1.webp');
}

run();
