import React  from 'react'
import ListStuffComponent from '../components/ListStuffComponent'
import {browserHistory} from 'react-router'
import {observer, inject} from "mobx-react";

function QueryStuff({firebaseStore}) {

    const buttonStyle = {
        marginTop: 20,
        padding: 5,
        fontSize: 18,
        width: 180
    };




    return (
        <div style={{padding: 20}}>
            <div style={{padding: 10}}>
                <button style={{...buttonStyle, marginRight: 10}} onClick={ () => firebaseStore.loadStuff() }>Load
                    Stuff
                </button>
                <button style={buttonStyle} onClick={ () => browserHistory.push("/") }>Go Home</button>
            </div>
            <div style={{padding: 10}}>
                <StuffInputForm submitAction={ (_data) => firebaseStore.addStuff(_data) }/>
            </div>
            <ListStuffComponent />
        </div>
    )
}


/**
 *
 */
class StuffInputForm extends React.Component {

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
            name: '',
            location: ''
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
        if (params.name.length && params.location.length) {
            this.props.submitAction(params);
        }

    }

    render() {
        return (
            <div style={{width: 450}}>
                <form onSubmit={this.handleSubmit}>
                    <div style={{clear: 'both'}}>
                        <label style={{...this.formElement, ...this.labelStyle}}>Name: </label>
                        <input type="text" value={this.state.name}
                               style={{...this.formElement, ...this.inputStyle}}
                               onChange={(_event) => this.setState({name: _event.target.value})}/>
                    </div>
                    <div style={{clear: 'both'}}>
                        <label style={{...this.formElement, ...this.labelStyle}}>Location: </label>
                        <input type="text" value={this.state.location}
                               style={{...this.formElement, ...this.inputStyle}}
                               onChange={(_event) => this.setState({location: _event.target.value})}/>
                    </div>
                    <div>
                        <input type="submit" value="Submit" style={this.buttonStyle}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default inject("firebaseStore")(observer(QueryStuff))