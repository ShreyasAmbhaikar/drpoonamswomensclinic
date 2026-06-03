const sharp = require('sharp');
const fs = require('fs');

async function convertImages() {
  const images = [
    {
      in: 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\53672199-c1ff-4044-9912-95166d02b2d2\\lscs_overview_indian_1780454395189.png',
      out: 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\lscs-overview-indian.webp'
    },
    {
      in: 'C:\\Users\\ACER\\.gemini\\antigravity\\brain\\53672199-c1ff-4044-9912-95166d02b2d2\\lscs_preparation_indian_1780454414199.png',
      out: 'c:\\Users\\ACER\\Desktop\\SEO Websites\\ferlix-ivf\\public\\images\\lscs-prep-indian.webp'
    }
  ];

  for (const img of images) {
    if (fs.existsSync(img.in)) {
      await sharp(img.in)
        .webp({ quality: 80, effort: 6 })
        .toFile(img.out);
      console.log('Converted:', img.out);
    } else {
      console.error('File not found:', img.in);
    }
  }
}

convertImages().catch(console.error);
