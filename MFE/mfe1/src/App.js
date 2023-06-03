import React, { useId } from 'react';
import { faker } from '@faker-js/faker';
import './App.css';
import Button from './Button';

function App() {
  console.log('❗mFE render  useId=', useId);

  const handleClick = () => console.log('❗clicked');

  return (
    <div className="App">
      MFE 1 {faker.internet.userName()}
      <br />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
