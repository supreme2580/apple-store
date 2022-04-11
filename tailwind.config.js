module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pops: {
          "20%": {
            transform: "scale(0.8)"
          },
          "100%": {
            transform: "scale(1)"
          }
        }
      },
      animation: {
        pops: "pops 1s"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
