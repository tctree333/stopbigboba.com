const { minify } = require('terser')
const fs = require('fs')

const inputDir = 'src/js/'
const outputDir = '_site/js/'
const exclude = /\.min\.js/

const options = {
  toplevel: true,
  compress: {
    passes: 2
  },
  format: {
    preamble: '/* minified */'
  }
}

fs.mkdirSync(outputDir, {
  recursive: true
})

const files = fs.readdirSync(inputDir)
files.forEach((file) => {
  const contents = fs.readFileSync(inputDir + file, {
    encoding: 'utf-8'
  })
  if (exclude.test(file)) {
    fs.writeFileSync(outputDir + file, contents)
  } else {
    uglify(contents).then((result) => {
      fs.writeFileSync(outputDir + file.split('.js')[0] + '.min.js', result.code)
    })
  }
})

async function uglify (code) {
  try {
    const result = await minify(code, options)
    return result
  } catch (error) {
    console.log(error)
  }
}
