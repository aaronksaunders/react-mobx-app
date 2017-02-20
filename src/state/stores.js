import FirebaseStore from './firebaseStore'
import UsersStore from './usersStore'

const firebaseStore = new FirebaseStore();
const usersStore = new UsersStore();
export const stores = { firebaseStore, usersStore };