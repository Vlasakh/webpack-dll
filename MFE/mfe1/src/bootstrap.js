import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

export function mount(element) {
  // ReactDOM.render(<App />, element);

  // ReactDOM.createRoot(element).render(<App />);
  ReactDOM.render(<App />, element);
}

// const element = document.getElementById('MFEroot');
