import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Stateprovider } from './pages/elements/storage.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stateprovider >
    <App />
    </Stateprovider>
      
  </React.StrictMode>
);
//idea
