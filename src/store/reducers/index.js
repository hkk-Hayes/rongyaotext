import { combineReducers } from 'redux';
import cart from './cart';
import app from './app'
import rydata from './rydata'
import user from './user'
export default combineReducers({
    cart,app,rydata,user
})