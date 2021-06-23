import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#1D3354',
      contrastText: '#D64045',
      dark: '#1D3354',
      light: '#1D3354',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#1D3354',
    },
    text: {
      primary: '#1D3354',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Dosis',
      fontWeight: 600,
      fontSize: 48,
    },
    body2: {
      fontFamily: 'Montserrat',
    },
    h4: {
      fontFamily: 'Dosis',
      fontWeight: 400,
    },
    h2: {
      fontSize: 30,
      fontFamily: 'Dosis',
    },
    h3: {
      fontFamily: 'Montserrat',
    },
    fontFamily: 'Montserrat',
  },
};