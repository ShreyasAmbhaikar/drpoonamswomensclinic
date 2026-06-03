const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convert() {
  const yogaPath = process.argv[2];
  const headerPath = process.argv[3];
  
  const destDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  await sharp(yogaPath)
    .webp({ quality: 85 })
    .toFile(path.join(destDir, 'prenatal_yoga.webp'));
    
  console.log('Converted prenatal_yoga.webp');

  await sharp(headerPath)
    .webp({ quality: 85 })
    .toFile(path.join(destDir, 'maternity_header.webp'));
    
  console.log('Converted maternity_header.webp');
}

convert().catch(console.error);
