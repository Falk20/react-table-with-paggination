import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.css';
import './index.css';
import ReactTable from './ReactTable.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ReactTable />, document.getElementById('root'));

serviceWorker.unregister();
