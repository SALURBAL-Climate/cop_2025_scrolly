/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2f7ed3',
        'brand-light-blue': '#d8e6ed',
        'brand-green': '#10b981',
        'brand-dark-text': '#1f2937',
        'brand-medium-text': '#374151',
        'brand-light-background': '#f9fafb',
      },
      fontFamily: {
        'sans': ['Open Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1200px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
