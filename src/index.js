import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './App';
import * as serviceWorker from './serviceWorker';

let RootDirectory = document.getElementById('Root')

ReactDOM.render(<RootApp />, RootDirectory);

serviceWorker.register();