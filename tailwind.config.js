module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#4665A1', // blue
      primaryLight: '#5D77AD',
      secondary: '#548D40', // green
      secondaryLight: '#92B686',
      dark: '#2d3748', // dark
      gray: '#718096',
      grayLight: '#a0aec0',
      grayLigher: '#e2e8f0',
      blue: '#9cc2dd', // TODO delete later?
      whiteSmoke: '#f8f8f8',
      aliceBlue: '#edf2f7',
      red: '#f56565',

      white: '#fff',
      black: '#000',
      transparent: 'transparent',
    },
    container: {
      screens: {
        '2xl': '1240px',
      },
    },
    extend: {
      gridTemplateColumns: {
        '2-1': '2fr 1fr',
        '4-6': '4fr 6fr',
      },
    },
  },
};
