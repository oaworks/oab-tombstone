module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/embed.js": "embed.js" });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};