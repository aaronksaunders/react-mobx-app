import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router, IndexRoute} from 'react-router'
import Root from './Root';
import App from './App';
import QueryUsers from './components/QueryUsers'
import QueryStuff from './components/QueryStuff'
import './index.css';

import * as firebase from 'firebase';

import {Provider} from 'mobx-react'
import StuffStore from './state/stuff'
import UserStore from './state/users'



const firebaseConfig = {
    apiKey: "AIzaSyC7XBiaPpX3tbmsO7oofWsNYK7ZP3fkkzU",
    authDomain: "new-web-project-45936.firebaseapp.com",
    databaseURL: "https://new-web-project-45936.firebaseio.com",
    storageBucket: "new-web-project-45936.appspot.com",
    messagingSenderId: "882846816313"
};

firebase.initializeApp(firebaseConfig);


const stuffStore = new StuffStore();
const userStore = new UserStore();
const stores = { stuffStore, userStore };
ReactDOM.render(
    <Provider {...stores} >
        <Router history={browserHistory}>
            <Route path="/" component={Root}>
                <IndexRoute component={App}/>
                <Route path="/query-users" component={QueryUsers} />
                <Route path="/query-stuff" component={QueryStuff}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);