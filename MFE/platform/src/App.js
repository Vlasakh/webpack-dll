import React, { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { mount } from 'appMFE1/MFE1Index';
import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    mount(document.getElementById('MFEroot'));
  }, []);

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React {faker.internet.userName()}
        </a>
      </header>
    </div>
  );
}

export default App;
