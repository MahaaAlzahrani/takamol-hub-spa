module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   blue: '#4FB7DD',
    // },
    extend: {
      colors: {
        // 'regal-blue': 'linear-gradient(51deg, #2FE3DB 0%, #834FE8 100%)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}