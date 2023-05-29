import React from 'react';
import { faker } from '@faker-js/faker';
import './App.css';
import Button from './Button';

function App() {
  console.log('❗mFE render');
  return (
    <div className="App">
      MFE 1 {faker.internet.userName()}
      <br />
      <Button />
    </div>
  );
}

export default App;
