import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#19C3D4',
    },
    secondary: {
      main: '#D1D419',
    },
    error: {
      main: '#C67463',
    },
    success: {
      main: '#5DE953'
    }
  },
});

export default theme;