import React, {PropTypes} from 'react'
import ListComponent from './ListComponent'
import {observer, inject} from "mobx-react";
import { browserHistory } from 'react-router'
import UserStore from '../state/users'

/**
 *
 */
export default  inject("userStore")(observer(function QueryUsers(props) {

    return (
        <div>
            <p>
                <button onClick={ () => props.userStore.loadUsers() }>Load Users</button>
                <button onClick={ () => browserHistory.push("/") }>Go Home</button>
            </p>
            <ListComponent />
        </div>
    )
}));