import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {browserHistory, Route, Router, IndexRoute} from 'react-router'
import Root from './Root';
import App from './App';
import QueryUsers from './containers/QueryUsers'
import QueryStuff from './containers/QueryStuff'

import {stores} from './state/stores'

import {Provider} from 'mobx-react'


/**
 * used as a guard to prevent users from accessing
 * secure routes
 *
 * @param nextState
 * @param replaceState
 */
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