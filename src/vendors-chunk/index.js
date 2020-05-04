import React from 'react';
import ReactDOM from 'react-dom';

// import _ from 'lodash';
import { get } from 'lodash';
import { merge } from 'lodash';
// import get from 'lodash/get';
// import merge from 'lodash/merge';

import App from './example';

console.log('get', get({ a: 22 }, 'a'));
// console.log(_.get({ a: 22 }, 'a'));
// const some =_.set({a:22}, 'b', 44)
// console.log('some',some)
// console.log('merge', _.merge({ a: 22 }, { cc: 33 }));
console.log('merge', merge({ a: 22 }, { cc: 33 }));

ReactDOM.render(<App />, document.getElementById('root'));

console.log('vendors');
