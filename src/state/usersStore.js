import {extendObservable, observable} from 'mobx';
import axios from 'axios';

/**
 *
 */
export default class UsersStore {

    constructor() {
        extendObservable(this, {
            isLoading: false,
            userList: observable.shallow([]),
            error: null
        })
    }

    loadUsers() {
        this.isLoading = true;

        axios.get('https://randomuser.me/api/?results=50')
            .then((_result) => {
                this.userList = _result.data.results
            })
            .catch((_error) => this.error = _error.message)
            .finally(() => this.isLoading = false)
    }
}


// POLYFILL
Promise.prototype['finally'] = function (f) {
    return this.then(function (value) {
        return Promise.resolve(f()).then(function () {
            return value;
        });
    }, function (err) {
        return Promise.resolve(f()).then(function () {
            throw err;
        });
    });
}