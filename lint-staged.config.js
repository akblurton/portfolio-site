const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{ts,tsx,js,jsx,md,mdx}": ["prettier --write"],
  "*.{ts,tsx}": [buildEslintCommand],
};
