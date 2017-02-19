import React, {PropTypes} from 'react'
import ListStuffComponent from '../components/ListStuffComponent'
import { browserHistory } from 'react-router'
import {observer, inject} from "mobx-react";

export default inject("stuffStore")(observer(function QueryStuff(props) {

    return (
        <div>
            <p>
                <button onClick={ () => props.stuffStore.loadStuff() }>Load Stuff</button>
                <button onClick={ () => props.stuffStore.addStuff() }>Add Stuff</button>
                <button onClick={ () => browserHistory.push("/") }>Go Home</button>
            </p>
            <ListStuffComponent />
        </div>
    )
}));