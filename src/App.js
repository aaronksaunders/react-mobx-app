import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import {observer} from "mobx-react";

import * as firebase from 'firebase';

import logo from './logo.svg';
import './App.css';


/**
 *
 */
class App extends Component {

    componentDidMount() { // check to see if already signed in.
        const auth = firebase.auth();
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({auth: user});
            } else {
                this.setState({auth: false});
                firebase.auth().signInWithEmailAndPassword('newuser@mail.com', 'password');
            }
        });
    }


    render() {

        return (
            <div className="App-intro">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <div className="App-intro">
                    <h3>Sample Application using <a href="https://github.com/mobxjs/mobx">MobX</a> to simplify working with <a
                        href="https://github.com/reactjs/redux">Redux</a> for state
                        management in your <a href="https://facebook.github.io/react/">React</a> application</h3>
                    <ul>
                        <li>How to use <a href="https://randomuser.me/">randomuser.me</a> to make an async request to
                            load data
                        </li>
                        <li>How to use <a href="">Firebase</a> to make async query and to show how to add items</li>
                        <li>Simple integration of <a
                            href="https://github.com/ReactTraining/react-router">react-router</a></li>
                        <li>multiple stores utilized in example, one for Users & one for Firebase Objects</li>
                    </ul>
                </div>

                <div>
                    <button className="App-button" onClick={ () => browserHistory.push('/query-users') }>Load Users -
                        RandomUser.me Example
                    </button>
                </div>
                <div>
                    <button className="App-button" onClick={ () => browserHistory.push('/query-stuff') }>Load Stuff -
                        Firebase Query Example
                    </button>
                </div>
                <div>
                </div>
            </div>
        );
    }
}


export default observer(App)
