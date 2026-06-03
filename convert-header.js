const sharp = require('sharp');
const fs = require('fs');

async function convertImage() {
  const img = {
    in: 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\53672199-c1ff-4044-9912-95166d02b2d2\\lscs_header_indian_1780454889844.png',
    out: 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\lscs-header-indian.webp'
  };

  if (fs.existsSync(img.in)) {
    await sharp(img.in)
      .webp({ quality: 80, effort: 6 })
      .toFile(img.out);
    console.log('Converted:', img.out);
  } else {
    console.error('File not found:', img.in);
  }
}

convertImage().catch(console.error);
