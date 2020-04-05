import React from 'react';
import beta from 'beta/beta';
import CiComponent from 'beta/c';
import alpha from '../dll/alpha';

console.log('beta', beta.toString());
console.log('alpha',alpha);


const  NewComponent=()=>{
  return <CiComponent/>
}

console.log('NewComponent',);

// console.log(require('module'));

export default NewComponent
