import './App.css';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const StyledButton = styled(Button)`
  margin: 20px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <StyledButton variant="contained" onClick={handleThemeChange}>
            Toggle Theme
          </StyledButton>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;