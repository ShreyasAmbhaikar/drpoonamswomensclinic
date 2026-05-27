import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const sourceDirs = [
  path.join(process.cwd(), '..', 'services', 'Egg & Sperm Freezing – Ferlix_files'),
  path.join(process.cwd(), '..', 'services') // For "Eggs and sperm freezing.png"
];
const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const originalsDir = path.join(publicImagesDir, '_originals');

if (!fs.existsSync(publicImagesDir)) fs.mkdirSync(publicImagesDir, { recursive: true });
if (!fs.existsSync(originalsDir)) fs.mkdirSync(originalsDir, { recursive: true });

for (const sourceDir of sourceDirs) {
  if (!fs.existsSync(sourceDir)) continue;
  const files = fs.readdirSync(sourceDir);
  const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png|svg)$/i));

  for (const file of imageFiles) {
    // skip this big file if we only want specific ones, but let's process all images there.
    const sourcePath = path.join(sourceDir, file);
    const originalPath = path.join(originalsDir, file);
    
    fs.copyFileSync(sourcePath, originalPath);
    
    const ext = path.extname(file).toLowerCase();
    
    if (ext === '.svg') {
      const destPath = path.join(publicImagesDir, file);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied ${file} to ${destPath}`);
    } else {
      const baseName = path.basename(file, ext);
      const destPath = path.join(publicImagesDir, `${baseName}.webp`);
      
      await sharp(sourcePath)
        .webp({ quality: 80 })
        .toFile(destPath)
        .then(() => console.log(`Converted ${file} to webp`))
        .catch(err => console.error(`Error converting ${file}:`, err));
    }
  }
}
console.log('Service images processing complete!');
