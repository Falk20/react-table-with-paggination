import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactTable from './ReactTable';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactTable />, document.getElementById('root'));

serviceWorker.unregister();
