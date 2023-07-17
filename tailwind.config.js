import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.tsx',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'primary-light': '#4F46E5',
        'primary-dark': '#C4B5FD',
        'secondary-light': '#10B981',
        'secondary-dark': '#065F46',
        'tertiary-light': '#3B82F6',
        'tertiary-dark': '#1D4ED8',

        // color I used to create wheels
        // '#1D4ED8',
        // like these
        'dark-bg': '#263459',
        'button-color-dark': '#6386E6',
        'button-color-green': '#40591D',
        'button-color-test': '#D97D27',
        'button-color-main': '#7985A6',
      },
    },
  },

  plugins: [forms, typography],
};
