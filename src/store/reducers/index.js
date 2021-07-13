import { combineReducers } from 'redux';
import auth from './auth';
import app from './app';
import measures from './measures';
import vendors from './vendors';
import products from './products';

export default combineReducers({
    auth,
    app,
    measures,
    vendors,
    products,
});