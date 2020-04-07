import React from 'react';
import ReactDOM from 'react-dom';
// import _ from 'lodash';
// import get from 'lodash/get';
// import mapKeys from 'lodash/mapKeys';
import merge from 'lodash/merge';
import App from './example';

// console.log('get', _.get({ a: 22 }, 'a'));
// console.log('mapKeys', mapKeys({ a: 1, b: 2 }, (value, key) => key + value),); // prettier-ignore
console.log('merge', merge({ a: 22 }, { cc: 33 }));

ReactDOM.render(<App />, document.getElementById('root'));
