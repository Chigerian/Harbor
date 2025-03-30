import { ThemeProvider } from 'styled-components/native';

const theme = {
  colors: {
    primary: '#6D28D9',  // Medium purple
    secondary: '#3B1E78', // Dark purple
    background: '#000000', // Black
    white: '#FFFFFF',      // White
    gray: '#A1A1AA',       // Gray for subtle UI elements
  },
  fonts: {
    regular: 'System',
    bold: 'System-Bold',
  },
};

export { ThemeProvider, theme };
