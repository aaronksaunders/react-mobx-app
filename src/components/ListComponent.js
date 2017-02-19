import React  from 'react';
import {observer, inject} from "mobx-react";

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
export default inject("userStore")(observer(function ListComponent(props) {
    const {userList, isLoading} = props.userStore;
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
}))

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListItem(props) {
    const {user} = props;
    const styles = {
        container: {'display': 'flex', flexDirection: 'row', padding: 3},
        image: {flex: 0, padding: 5},
        email: {flex: 1, padding: 5}
    }


    return (
        <div style={styles.container}>
            <img style={styles.image} src={user.picture.thumbnail}></img>
            <p style={styles.email}>{user.email}</p>
        </div>
    );
}

