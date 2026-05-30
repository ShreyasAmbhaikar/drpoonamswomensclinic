import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const files = [
  'normal-delivery.png',
  'lscs-caesarean.png',
  'scarless-hysterectomy.png',
  'pcod-care.png',
  'cervical-screening.png',
  'pre-conceptional.png',
  'mtp-de.png',
  'tubal-ligation.png',
  'laparoscopic-procedures.png'
];

async function run() {
  for (const file of files) {
    const sourcePath = path.join(publicImagesDir, file);
    if (fs.existsSync(sourcePath)) {
      const destPath = sourcePath.replace('.png', '.webp');
      try {
        await sharp(sourcePath)
          .webp({ quality: 80 })
          .toFile(destPath);
        console.log(`Successfully converted ${file} to webp`);
        fs.unlinkSync(sourcePath);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    } else {
      console.warn(`File does not exist: ${sourcePath}`);
    }
  }
  console.log('Optimization complete!');
}

run();
