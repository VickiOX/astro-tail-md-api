/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
    theme: {
        extend: {
            fontFamily: {

                'sans': ['"Prompt"', ...defaultTheme.fontFamily.sans],
                
                'display': ['"Roboto"', 'monospace'], // Adds a new `font-display` class
                
                },
            colors: {
                'persianmosaic': {
                    100: '#d2dfe2',
                    200: '#a5c0c5',
                    300: '#7aa1a9',
                    400: '#4e838e',
                    500: '#196673',
                    600: '#104a54',
                    700: '#072f36',
                    800: '#02171b',
                    900: '#000405',
                  },
            }
        }
    },
  };
