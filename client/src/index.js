import React from 'react';
import ReactDOM from 'react-dom';
import './styles/paper.min.css';
import './styles/index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

unregister();
ReactDOM.render(<App />, document.getElementById('root'));
