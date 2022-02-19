import baseColors from '@elegantstack/flow-ui-theme/src/theme/colors'

const blue = {
  100: '#D7DADD',
  200: '#6481AD',
  300: '#2A4DA1',
  400: '#6481AD',
  500: '#9DB1BC',
  600: '#2A4DA1',
  700: '#9DB1BC',
  800: '#2A4DA1',
  900: '#2A4DA1'
}
const green = {
  100: '#4CB748',
  200: '#CBE6BD',
  300: '#4CB748',
  400: '#CBE6BD',
  500: '#CBE6BD',
  600: '#4CB748',
  700: '#CBE6BD',
  800: '#C7E3BB',
  900: '#C7E3BB'
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
