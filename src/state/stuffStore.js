import {extendObservable, computed, observable} from 'mobx';

import * as firebase from 'firebase';

/**
 * this is the store that is used to access and update the firebase data
 */
export default class StuffStore {

    constructor() {
        extendObservable(this, {
            isLoading: false,
            stuffList: observable.shallow([]),
            newStuff : null,
            error: null
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
        updates['/stuff/' + newPostKey] = {
            'location': 'location ' + Date.now(),
            'name': 'Any Name'
        };

        firebase.database().ref().update(updates).then((_response) => {
            this.newStuff = {...updates['/stuff/' + newPostKey], id: newPostKey};
            this.isLoading = false;
        }).catch((_error) => {
            this.error = _error.message
            this.isLoading = false;
        })
    }


}


