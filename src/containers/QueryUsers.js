import React, {PropTypes} from 'react'
import ListUsersComponent from '../components/ListUsersComponent'
import {observer, inject} from "mobx-react";
import { browserHistory } from 'react-router'

/**
 *
 */
export default  inject("usersStore")(observer(function QueryUsers(props) {

    return (
        <div>
            <p>
                <button onClick={ () => props.usersStore.loadUsers() }>Load Users</button>
                <button onClick={ () => browserHistory.push("/") }>Go Home</button>
            </p>
            <ListUsersComponent />
        </div>
    )
}));