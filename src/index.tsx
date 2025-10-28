import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { ThemeContextProvider } from './context/ThemeContext';
import { CssBaseline } from '@mui/material';

// Ensure the 'root' element exists in the HTML
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename="/my-site">
    <ThemeContextProvider>
      <CssBaseline />
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);

// Optional: measure performance
reportWebVitals();
