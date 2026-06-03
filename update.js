const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/ACER/Desktop/SEO Websites/ferlix-ivf/src/app';
const dirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

let updatedCount = 0;

dirs.forEach(dir => {
  const file = path.join(baseDir, dir, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    // Outer card background
    if (content.includes('bg-[#242736]') && content.includes('Why Choose Dr.')) {
      content = content.replace(/bg-\[#242736\]/g, 'bg-[#151722]');
      changed = true;
    }
    
    // 5.0 color
    if (content.includes('text-[44px] font-bold text-accent mb-1')) {
      content = content.replace(/text-\[44px\] font-bold text-accent mb-1/g, 'text-[44px] font-bold text-white mb-1');
      changed = true;
    }
    
    // Font size for Based on 42 Verified Reviews
    if (content.includes('<p className="text-[12px] text-white/70">Based on 42 Verified Reviews</p>')) {
      content = content.replace('<p className="text-[12px] text-white/70">Based on 42 Verified Reviews</p>', '<p className="text-[14px] md:text-[15px] text-white/80">Based on 42 Verified Reviews</p>');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(file, content);
      updatedCount++;
    }
  }
});

console.log('Updated ' + updatedCount + ' files.');
