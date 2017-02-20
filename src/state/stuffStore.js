import {extendObservable} from 'mobx';

import * as firebase from 'firebase';

/**
 * this is the store that is used to access and update the firebase data
 */
export default class StuffStore {

    constructor() {
        extendObservable(this, {
            isLoading: false,
            stuffList: [],
            newStuff : null,
            error: null,
            user : null,

        })
    }

    doLogin({email,password}) {
        // 'newuser@mail.com', 'password'
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((_user) =>{
                this.error = null;
                this.user = _user;
            }, (_error)=>{
                this.error = _error;
                this.user = null;
            })
    }

    doCreateAccount() {

    }

    doCheckAuth() {

    }

    doLogout() {
        firebase.auth().signOut().then(()=>{
            this.user = null
        })
    }

    /**
     * load the objects from the stuff path in the firebase store
     */
    loadStuff() {
        this.isLoading = true;

        let result = [];
        // load data from firebase...
        firebase.database().ref('stuff').orderByKey().once('value', (_snapshot) => {

            _snapshot.forEach((_childSnapshot) => {
                // get the key/id and the data for display
                let element = _childSnapshot.val();
                element.id = _childSnapshot.key;

                result.push(element);
            });

            this.stuffList = result;
            this.isLoading = false;

        }).catch((_error) => {
            this.error = _error.message;
            this.isLoading = false;
        })

    }

    /**
     * add on object to the firebase store
     *
     * @param _options
     */
    addStuff(_options) {
        this.isLoading = true;

        const newPostKey = firebase.database().ref().child('stuff').push().key;

        const updates = {};
        updates['/stuff/' + newPostKey] = {..._options, when : Date.now() };

        firebase.database().ref().update(updates).then((_response) => {
            this.newStuff = {...updates['/stuff/' + newPostKey], id: newPostKey};
            return this.stuffList.push(this.newStuff)
        }).then(() =>{
            this.isLoading = false;
        }).catch((_error) => {
            this.error = _error.message
            this.isLoading = false;
        })
    }


}


