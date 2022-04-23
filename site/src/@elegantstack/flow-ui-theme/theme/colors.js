import baseColors from '@elegantstack/flow-ui-theme/src/theme/colors'

const blue = {
  100: '#5D77AD',
  200: '#6481AD',
  300: '#5D77AD',
  400: '#6481AD',
  500: '#9DB1BC',
  600: '#4665A1',
  700: '#9DB1BC',
  800: '#4665A1',
  900: '#4665A1'
}
const green = {
  100: '#92B686',
  200: '#CBE6BD',
  300: '#92B686',
  400: '#CBE6BD',
  500: '#CBE6BD',
  600: '#548D40',
  700: '#CBE6BD',
  800: '#548D40',
  900: '#548D40'
}

const colors = {
  ...baseColors,
  alphaLighter: blue[100],
  alphaLight: blue[300],
  alpha: blue[600],
  alphaDark: blue[800],
  alphaDarker: blue[900],
  betaLighter: green[100],
  betaLight: green[300],
  beta: green[600],
  betaDark: green[800],
  betaDarker: green[900]
}

export default colors
