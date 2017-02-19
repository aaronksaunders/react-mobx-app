import React, { Component } from 'react'
import { Link } from 'react-router'
//import { Home } from '../../Containers'

export default class Root extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}