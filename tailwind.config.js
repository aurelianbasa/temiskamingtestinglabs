module.exports = {
  content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#4665A1', // blue
      secondary: '#548D40', // green
      tertiary: '#718096', // gray
      quaternary: '#2d3748', // dark blue
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
