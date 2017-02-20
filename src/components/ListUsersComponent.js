import React  from 'react';
import {observer, inject} from "mobx-react";

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListUsersComponent({usersStore}) {
    const {userList, isLoading} = usersStore;
    const styles = {'display': 'flex', flexDirection: 'column'}

    const listItems = isLoading ? <p>LOADING...</p>
        : userList.map((_user) =>
            <ListItem key={_user.login.md5} user={_user}/>
        );

    return (
        <div style={styles}>
            {listItems}
        </div>
    );
}

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListItem({user}) {

    const styles = {
        container: {'display': 'flex', flexDirection: 'row', padding: 3},
        image: {flex: 0, padding: 5},
        email: {flex: 1, padding: 5}
    }


    return (
        <div style={styles.container}>
            <img style={styles.image} src={user.picture.thumbnail} role="presentation"  ></img>
            <p style={styles.email}>{user.email}</p>
        </div>
    );
}

export default inject("usersStore")(observer(ListUsersComponent))