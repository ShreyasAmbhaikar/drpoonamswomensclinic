const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');

const imgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780163006422.png';

async function run() {
  try {
    const img = sharp(imgPath);
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    console.log('Original image info:', info);
    
    let transparentCount = 0;
    let opaqueCount = 0;
    
    for (let i = 3; i < data.length; i += info.channels) {
      if (data[i] < 255) {
        transparentCount++;
      } else {
        opaqueCount++;
      }
    }
    
    console.log(`Pixels: transparent/semi-transparent=${transparentCount}, fully-opaque=${opaqueCount}`);
  } catch (err) {
    console.error(err);
  }
}

run();
