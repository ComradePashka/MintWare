const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#5E74ED',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#505677',
          'base-100': '#ffffff',
          'base-200': '#E7ECFF',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
