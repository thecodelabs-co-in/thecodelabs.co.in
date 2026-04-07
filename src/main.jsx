import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { theme } from './config/theme';
import App from './App.jsx';
import './index.css';

const rootEl = document.documentElement;
rootEl.style.setProperty('--color-primary', theme.primaryColor);
rootEl.style.setProperty('--color-secondary', theme.secondaryColor);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
