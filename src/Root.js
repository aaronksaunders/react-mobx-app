import React, { Component } from 'react'

import DevTools, { configureDevtool } from 'mobx-react-devtools';

// Any configurations are optional
configureDevtool({
    // Turn on logging changes button programmatically:
    logEnabled: true,
    // Turn off displaying conponents' updates button programmatically:
    updatesEnabled: false,

});

export default class Root extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <DevTools  graphEnabled={true}/>
            </div>
        )
    }
}