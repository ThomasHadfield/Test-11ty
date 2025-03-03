
//IMAGE

const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};






// CONFIG

module.exports = function (eleventyConfig) {


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

