import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './store';
import Toasts from './components/toasts';

const AppWithRouter = withRouter(App);
ReactDOM.render(
<Provider store={store}>
    <Router>
        <AppWithRouter />
        <Toasts/>
    </Router>
</Provider>
, document.getElementById('root'));