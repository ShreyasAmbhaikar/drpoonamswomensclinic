const fs = require('fs');
const path = require('path');

const baseDir = 'C:/Users/ACER/Desktop/SEO Websites/ferlix-ivf/src/app';
const dirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

let updatedCount = 0;

dirs.forEach(dir => {
  const file = path.join(baseDir, dir, 'page.tsx');
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Extract title
    const titleMatch = content.match(/<PageHeader\s+title=\x22(.*?)\x22/);
    if (titleMatch) {
      const title = titleMatch[1];
      
      if (content.includes('text="What is ' + title + '?"')) {
          // Already added
          return;
      }
      
      const searchStr = '</div>\n                  <div className="text-text space-y-4 leading-relaxed">';
      const replacement = '</div>\n                  <AnimatedHeading \n                    text="What is ' + title + '?" \n                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"\n                  />\n                  <div className="text-text space-y-4 leading-relaxed">';
      
      if (content.includes(searchStr)) {
        content = content.replace(searchStr, replacement);
        fs.writeFileSync(file, content);
        updatedCount++;
      } else {
        // Try another spacing
        const regex = /<\/div>\s*<div className="text-text space-y-4 leading-relaxed">/;
        if (regex.test(content)) {
           content = content.replace(regex, '</div>\n                  <AnimatedHeading \n                    text="What is ' + title + '?" \n                    className="text-[28px] md:text-[34px] font-bold text-primary mb-[20px] leading-tight mt-6"\n                  />\n                  <div className="text-text space-y-4 leading-relaxed">');
           fs.writeFileSync(file, content);
           updatedCount++;
        }
      }
    }
  }
});

console.log('Updated ' + updatedCount + ' files.');
