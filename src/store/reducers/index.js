import { combineReducers } from 'redux';
import auth from './auth';
import app from './app';
import measures from './measures';

export default combineReducers({
    auth,
    app,
    measures,
});