
// CONFIG

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/admin/");

  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addWatchTarget("./src/assets/");

  eleventyConfig.addPassthroughCopy("./src/styles/");
  eleventyConfig.addWatchTarget("./src/styles/");

  eleventyConfig.addPassthroughCopy("./src/scripts/");
  eleventyConfig.addWatchTarget("./src/scripts/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  return {
    dir: {
      input: "src",
    }
  }

};

