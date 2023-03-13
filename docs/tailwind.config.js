module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: [],
  theme: {
    extend: {
      padding:{
        '1/3': '33.33333%',
        '2/3': '66.66667%'
      },
      container:{
        center: true,
      }
    },
  },
  variants: {},
  plugins: [],
}
