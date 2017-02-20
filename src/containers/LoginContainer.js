import React, {Component} from 'react'
import {observer, inject} from "mobx-react";
import {browserHistory} from 'react-router'

/**
 *
 */
function LoginContainer({firebaseStore}) {

    return (
        <div>
            <div>
                <FirebaseLoginForm submitAction={ (_data) => firebaseStore.doLogin(_data) }/>
            </div>
            {firebaseStore.error ? (<div style={{color: 'red', fontSize:18, padding:10}}>{firebaseStore.error.message}</div>) : "" }
        </div>
    )
}


/**
 *
 */
class FirebaseLoginForm extends React.Component {

    buttonStyle = {
        marginTop: 20,
        padding: 5,
        fontSize: 18,
        width: 180
    }


    labelStyle = {
        float: 'left',
    }

    formElement = {
        marginTop: 4,
        marginLeft: 5,
        padding: 2,
        fontSize: 18,
    }
    inputStyle = {
        float: 'right',
        width: 350
    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     *
     * @param event
     */
    handleSubmit(event) {
        event.preventDefault();
        let params = this.state;
        if (params.email.length && params.password.length) {
            this.props.submitAction(params);
        }

    }

    render() {
        return (
            <div style={{width: 500}}>
                <form onSubmit={this.handleSubmit}>
                    <div style={{clear: 'both'}}>
                        <label style={{...this.formElement, ...this.labelStyle}}>Email: </label>
                        <input type="text" value={this.state.email}
                               style={{...this.formElement, ...this.inputStyle}}
                               onChange={(_event) => this.setState({email: _event.target.value})}/>
                    </div>
                    <div style={{clear: 'both'}}>
                        <label style={{...this.formElement, ...this.labelStyle}}>Password: </label>
                        <input type="password" value={this.state.password}
                               style={{...this.formElement, ...this.inputStyle}}
                               onChange={(_event) => this.setState({password: _event.target.value})}/>
                    </div>
                    <div>
                        <input type="submit" value="Login" style={this.buttonStyle}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default inject("firebaseStore")(observer(LoginContainer))