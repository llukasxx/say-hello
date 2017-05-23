import React from 'react';
import ReactDOM from 'react-dom';
import SayHello from './SayHello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SayHello />, document.getElementById('root'));
registerServiceWorker();
