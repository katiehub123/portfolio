module.exports = function(eleventyConfig){
     eleventyConfig.addPassthroughCopy('_src/img')
     eleventyConfig.addPassthroughCopy('_src/css')
     eleventyConfig.addPassthroughCopy('_src/js')
     eleventyConfig.addPassthroughCopy('_src/font')
     eleventyConfig.addPassthroughCopy('_src/images')
     eleventyConfig.addPassthroughCopy('_src/sounds')
     return {
          dir: {
               input: "_src"
          }
     }
}

