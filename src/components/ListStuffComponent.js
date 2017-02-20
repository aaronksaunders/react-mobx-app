import React  from 'react';
import {observer, inject} from "mobx-react";

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListStuffComponent({stuffStore}) {

    const {stuffList, isLoading} = stuffStore;
    const styles = {'display': 'flex', flexDirection: 'column', padding: 10}
    const listItems = stuffList.map((_stuff) =>
            <ListItem key={_stuff.id} stuff={_stuff}/>
        );
    const isLoadingText =  isLoading ? <div>LOADING...</div> : ""

    return (
        <div style={styles}>
            {isLoadingText}
            {listItems}
        </div>
    );
};

/**
 *
 * @param props
 * @returns {XML}
 * @constructor
 */
function ListItem({stuff}) {
    const styles = {
        container: {'display': 'flex', flexDirection: 'row', padding: 10},
        name: {flex: 1, padding: 2},
        location: {flex: 1, padding: 2}
    }


    return (
        <div style={styles.container}>
            <p style={styles.name}>{stuff.name}</p>
            <p style={styles.location}>{stuff.location}</p>
        </div>
    );
}


export default inject("stuffStore")(observer(ListStuffComponent))
