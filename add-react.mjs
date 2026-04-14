import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = walkSync(filePath, filelist);
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        filelist.push(filePath);
      }
    }
  });
  return filelist;
};

const srcDir = path.join(process.cwd(), 'src');
const files = walkSync(srcDir);

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if React is already imported like `import React from 'react'`
  if (/import\s+React\b/.test(content)) {
    return;
  }
  
  const clientRegex = /^(\s*["']use client["'];?\s*?\r?\n)/;
  
  if (clientRegex.test(content)) {
    content = content.replace(clientRegex, "$1import React from 'react';\n");
  } else {
    content = "import React from 'react';\n" + content;
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated:', filePath);
});

console.log('Done.');
