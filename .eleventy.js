module.exports = function(eleventyConfig){
     eleventyConfig.addPassthroughCopy('_src/img')
     eleventyConfig.addPlugin(eleventyNavigationPlugin);
     return {
          dir: {
               input: "_src"
          }
     }
}

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")