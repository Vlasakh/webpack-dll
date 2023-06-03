import React from 'react';

// create a button component
const Button = ({ onClick }) => {
  const handleClick = () => onClick && onClick();

  return (
    <div>
      <button onClick={handleClick}>Button from MFE1</button>
    </div>
  );
};

export default Button;
