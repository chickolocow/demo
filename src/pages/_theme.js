/**
 * These theme values will override the base theme.
 *
 * We're passing these values to Layout component;
 * The Layout component merges these values with the
 * base theme.
 *
 */

const blue = {
  100: '#D3E7FE',
  200: '#A8CEFD',
  300: '#7CAFFA',
  400: '#5B95F6',
  500: '#276BF0',
  600: '#1C52CE',
  700: '#133CAC',
  800: '#0C2A8B',
  900: '#071C73'
}

const green = {
  100: '#EBFDDA',
  200: '#D4FBB5',
  300: '#B3F48E',
  400: '#93E96F',
  500: '#64DB43',
  600: '#45BC30',
  700: '#2A9D21',
  800: '#157F15',
  900: '#0C6913'
}

export default {
  colors: {
    betaLighter: green[100],
    betaLight: green[300],
    beta: green[600],
    betaDark: green[700],
    betaDarker: green[800],
    alphaLighter: blue[100],
    alphaLight: blue[300],
    alpha: blue[500],
    alphaDark: blue[600],
    alphaDarker: blue[800],
    background: `#FFFFFF`,
    headerBg: `transparent`,
    footerBg: `#F6F7FA`
  }
}
