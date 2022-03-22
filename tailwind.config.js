module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#4FB7DD',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}