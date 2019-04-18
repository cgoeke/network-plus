import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#444"
    },
    secondary: {
      main: "#f22E16"
    },
    text: {
      primary: "#444",
      secondary: "#959595",
    },
    background: {
      default: "#a9aaad"
    },
    error: {
      main: "#e53935"
    }
  },
  typography: {
    useNextVariants: true,
    fontWeightBold: 700
  },
  overrides: {
  }
});