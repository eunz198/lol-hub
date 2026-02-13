import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signin from './pages/auth/signin';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Signin />
  </React.StrictMode>
);

reportWebVitals();