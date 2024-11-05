/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  endOfLine: "lf",
  trailingComma: "all",
  tabWidth: 2,
  printWidth: 80,
};
