import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {browserHistory, Route, Router, IndexRoute} from 'react-router'
import Root from './Root';
import App from './App';
import QueryUsers from './containers/QueryUsers'
import QueryStuff from './containers/QueryStuff'

import {stores} from './state/stores'

import * as firebase from 'firebase';

import {Provider} from 'mobx-react'

// Initialize firebase...
const firebaseConfig = {
    apiKey: "AIzaSyC7XBiaPpX3tbmsO7oofWsNYK7ZP3fkkzU",
    authDomain: "new-web-project-45936.firebaseapp.com",
    databaseURL: "https://new-web-project-45936.firebaseio.com",
    storageBucket: "new-web-project-45936.appspot.com",
    messagingSenderId: "882846816313"
};

firebase.initializeApp(firebaseConfig);


function checkAuth(nextState, replaceState) {

    let {stuffStore} = stores;
    if (nextState.location.pathname === '/') return;
    if (stuffStore.user === null) {
        replaceState('/');
    }

}


ReactDOM.render(
    // stores loaded up from state/stores.js
    <Provider {...stores} >
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={App}/>
                <Route onEnter={checkAuth}>
                    <Route path="/query-users" component={QueryUsers}/>
                    <Route path="/query-stuff" component={QueryStuff}/>
                </Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);