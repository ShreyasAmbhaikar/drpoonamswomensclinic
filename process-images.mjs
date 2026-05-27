import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDir = path.join(process.cwd(), '..', 'Ferlix – IVF & Fertility Clinic WordPress Theme_files');
const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const originalsDir = path.join(publicImagesDir, '_originals');

if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });
if (!fs.existsSync(originalsDir)) fs.mkdirSync(originalsDir, { recursive: true });

const files = fs.readdirSync(sourceDir);

const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png|svg)$/i));

for (const file of imageFiles) {
  const sourcePath = path.join(sourceDir, file);
  const originalPath = path.join(originalsDir, file);
  
  // Copy to _originals
  fs.copyFileSync(sourcePath, originalPath);
  
  const ext = path.extname(file).toLowerCase();
  
  if (ext === '.svg' || file === 'favicon-women-health.png') {
    // Copy SVGs and the favicon directly to public/images
    // Let's rename favicon to favicon.png for easier use
    const destPath = file === 'favicon-women-health.png' 
      ? path.join(publicImagesDir, 'favicon.png') 
      : path.join(publicImagesDir, file);
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${file} to ${destPath}`);
  } else {
    // Convert to webp
    const baseName = path.basename(file, ext);
    const destPath = path.join(publicImagesDir, `${baseName}.webp`);
    
    await sharp(sourcePath)
      .webp({ quality: 80 })
      .toFile(destPath)
      .then(() => console.log(`Converted ${file} to webp`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
}

console.log('Image processing complete!');
