const fs = require('fs')

const file = 'node_modules/@asamuzakjp/css-color/dist/cjs/index.cjs'
if (fs.existsSync(file)) {
  let data = fs.readFileSync(file, 'utf8')
  data = data.replace(/require\(['"]@csstools\/css-calc['"]\)/g, '{}')
  data = data.replace(/require\(['"]@csstools\/css-tokenizer['"]\)/g, '{}')
  fs.writeFileSync(file, data)
  console.log('Patched', file)
} else {
  console.log('File not found', file)
}
