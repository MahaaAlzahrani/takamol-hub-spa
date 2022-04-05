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
        'primary-color': '#4FB7DD',
        'gery': '#F7F7F9',
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