module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/embed.js": "embed.js" });
  eleventyConfig.addPassthroughCopy({ "src/icon_OAB.png": "icon_OAB.png" });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};