import { combineReducers } from 'redux';
import auth from './auth';
import app from './app';
import measures from './measures';
import vendors from './vendors';

export default combineReducers({
    auth,
    app,
    measures,
    vendors,
});