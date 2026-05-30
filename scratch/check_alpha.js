const sharp = require('c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\node_modules\\sharp');

const lightImgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780165371029.png';
const darkImgPath = 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\fe86c16f-9a90-4794-9546-ebb1cf321981\\media__1780165371053.png';

async function check(imgPath, name) {
  try {
    const img = sharp(imgPath);
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    let transparent = 0;
    let opaque = 0;
    
    if (info.channels === 4) {
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) transparent++;
        else opaque++;
      }
    }
    
    console.log(`${name}: channels=${info.channels}, transparent=${transparent}, opaque=${opaque}`);
  } catch (err) {
    console.error(err);
  }
}

async function run() {
  await check(lightImgPath, 'Light Logo');
  await check(darkImgPath, 'Dark Logo');
}

run();
