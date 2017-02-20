import React from 'react'
import ListUsersComponent from '../components/ListUsersComponent'
import {observer, inject} from "mobx-react";
import { browserHistory } from 'react-router'

/**
 *
 */
function QueryUsers({usersStore}) {

    return (
        <div>
            <p>
                <button onClick={ () => usersStore.loadUsers() }>Load Users</button>
                <button onClick={ () => browserHistory.push("/") }>Go Home</button>
            </p>
            <ListUsersComponent />
        </div>
    )
}

export default inject("usersStore")(observer(QueryUsers))