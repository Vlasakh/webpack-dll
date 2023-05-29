import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

export function mount(element) {
  // ReactDOM.render(<App />, element);

  ReactDOM.createRoot(element).render(<App />);
}

// const element = document.getElementById('MFEroot');
