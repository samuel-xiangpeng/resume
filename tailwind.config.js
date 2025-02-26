/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',  // 设置最大宽度为 1024px
        xl: '1024px',  // 即使在更大的屏幕上也保持 1024px
        '2xl': '1024px'
      },
    },
  },
  plugins: [],
}

