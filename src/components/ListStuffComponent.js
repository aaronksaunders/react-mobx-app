import React  from 'react';
import {observer, inject} from "mobx-react";

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
export default inject("stuffStore")(observer(function ListStuffComponent(props) {
    debugger;
    console.log(props)
    const {stuffList, isLoading} = props.stuffStore;
    const styles = {'display': 'flex', flexDirection: 'column'}
    const listItems = isLoading ? <p>LOADING...</p>
        : stuffList.map((_stuff) =>
            <ListItem key={_stuff.id} stuff={_stuff}/>
        );

    return (
        <div style={styles}>
            {listItems}
        </div>
    );
}));

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListItem(props) {
    const {stuff} = props;
    const styles = {
        container: {'display': 'flex', flexDirection: 'row', padding: 3},
        image: {flex: 0, padding: 5},
        email: {flex: 1, padding: 5}
    }


    return (
        <div style={styles.container}>
            <p style={styles.email}>{stuff.name}</p>
            <p style={styles.email}>{stuff.location}</p>
        </div>
    );
}


