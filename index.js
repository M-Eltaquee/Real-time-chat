import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
ReactDOM.createRoot(document.querySelector('#root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
