import StuffStore from './stuffStore'
import UsersStore from './usersStore'

const stuffStore = new StuffStore();
const usersStore = new UsersStore();
export const stores = { stuffStore, usersStore };