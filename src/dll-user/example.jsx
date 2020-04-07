import React from 'react';

import beta from 'beta/beta';
import CiComponent from 'beta/c';
import alpha from '../dll/alpha';

console.log('beta', beta.toString());
console.log('alpha', alpha);


const NewComponent = () => {
  return <div>
    <h2>Hello</h2>
    <CiComponent someProp={'Im CiComponent'}/>
  </div>
}



export default NewComponent
// export default ()=>{}
