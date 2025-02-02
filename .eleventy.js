module.exports = function(eleventyConfig) {

    return {
        dir: {
            input: 'src',
            includes:'_includes',
            output: '_sites',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',

    };

    eleventyConfig.addPassthroughCopy("./assets/images");
    eleventyConfig.addPassthroughCopy("./assets/styles");
    eleventyConfig.addPassthroughCopy("./assets/scripts");

};