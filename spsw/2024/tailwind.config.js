/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{njk,md,json}',
    './_includes/**/*.{njk,md,json}',
    './data/**/*.{njk,md,json}',
    './*.{njk,md,json}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
