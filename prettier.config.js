const path = require("path");

/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: path.resolve(__dirname, "./tailwind.config.js"),
};
