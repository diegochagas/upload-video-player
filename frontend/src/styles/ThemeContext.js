// NPM imports
import { createContext, useContext } from 'react'

// Project imports
import { colors } from './theme'

// Exports

const THEMES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  RAINBOW1: 'rainbow1'
}

// we will use the theme value as a string instead of the color
// because in the future we can use the theme to generate a full color pallete
// (eg: main color + support color + contrast color)

const ThemeContext = createContext(THEMES.PRIMARY)

function getColorFromTheme(theme) {
  switch (theme) {
    case THEMES.RAINBOW1:
      return colors.rainbow1
    case THEMES.SECONDARY:
      return colors.brandSecondary
    case THEMES.PRIMARY:
    default:
      return colors.brandPrimary
  }
}

function useThemeContext() {
  return useContext(ThemeContext)
}

export default ThemeContext

export {
  THEMES,
  getColorFromTheme,
  useThemeContext
}
