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
        'primary-dark': '##3b82f6',
        'secondary-light': '#10B981',
        'secondary-dark': '#232D50',
        'tertiary-light': '#3B82F6',
        'dark-background': '#111827',
        'dark-bg': '#232D50',
        'button-color-main': '#3b82f6',
        'shadow-test': '#6c6982',
      },
    },
  },

  plugins: [forms, typography],
};
