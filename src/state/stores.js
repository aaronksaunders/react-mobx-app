import StuffStore from './stuff'
import UserStore from './users'

const stuffStore = new StuffStore();
const userStore = new UserStore();
export  const stores = { stuffStore, userStore };