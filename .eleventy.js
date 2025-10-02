module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy({ "src/embed.js": "embed.js" });
  eleventyConfig.addPassthroughCopy({ "src/icon_OAB.png": "icon_OAB.png" });
  eleventyConfig.addPassthroughCopy({ "src/book.jpg": "book.jpg" });
  eleventyConfig.addPassthroughCopy({ "src/book.jpg": "book.jpg" });
  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};