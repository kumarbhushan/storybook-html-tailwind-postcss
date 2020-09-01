const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
	whitelistPatterns: [/trix$/],
  // Specify the paths to all of the template files in your project
  content: [
    // "./assets/**/*.html",
    // "./assets/**/*.jsx",
    // "./assets/**/*.tsx",
    "./templates/**/*.tmpl",
    "./templates/partials/*.tmpl",
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
		tailwindcss,
		autoprefixer,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
