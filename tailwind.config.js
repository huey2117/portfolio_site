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
      },
    },
  },

  plugins: [forms, typography],
};
