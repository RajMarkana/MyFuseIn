/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    extend: {
      boxShadow: {
        DEFAULT: '3px 14px 29.1px -8px #8C52FF',
        CBlack: '0px 0px 29.1px -8px #8C52FF38',
        PSecond: '0px 0px 29.1px -8px #21016049',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'primary': '#8C52FF',
        'primary-second': '#562FC5',
        'primary-light': '#faf6ff',
        'secondary': '#4b5563'
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    }
  },
  plugins: [],
}

