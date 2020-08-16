const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy({'src/favicons': ''})

  eleventyConfig.setBrowserSyncConfig({
    https: true
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
      return minified
    }

    return content
  })

  if (process.env.ELEVENTY_PRODUCTION) {
    require('./utils/minify')
  } else {
    eleventyConfig.addPassthroughCopy('src/js')
  }
}