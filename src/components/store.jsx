import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import mathReducer from './reducers/mathReducer.jsx';
import userReducer from './reducers/userReducer.jsx';
import thunk from 'redux-thunk';

export default createStore(
	combineReducers({mathReducer,userReducer}), 
	{},
	applyMiddleware(createLogger(), thunk));