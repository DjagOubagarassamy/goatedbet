import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import AchatReussi from './AchatReussi';

const path = window.location.pathname;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/achat-reussi' ? <AchatReussi /> : <App />}
  </StrictMode>
);
