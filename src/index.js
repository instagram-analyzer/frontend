import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './store';
//toast here

const AppWithRouter = withRouter(App);
ReactDOM.render(
<Provider store={store}>
    <Router>
        <AppWithRouter />
        {/* toast here */}
    </Router>
</Provider>
, document.getElementById('root'));