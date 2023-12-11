import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { makeServer } from './mock_server';
import App from './core/app';

// Initialize Mirage JS server in development environment
if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
