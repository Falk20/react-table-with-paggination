import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import ReactTable from './ReactTable.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactTable />, document.getElementById('root'));

serviceWorker.unregister();
