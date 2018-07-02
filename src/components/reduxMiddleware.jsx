import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger'
 
const initializeState = {
	result: 1,
	lastValues:[]
}
const userReducer = (state={
	name:"Max",
	age:27
}, action) => {
	switch(action.type){
		case "SET_NAME":
			state = {
				...state,
				name : action.payload
			};
			break;
		case "SET_AGE":
			state = {
				...state,
				age : action.payload
			};
			break;
	}
	return state;
};
const mathReducer = (state = initializeState,action)  => {
	switch(action.type) {
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValues:[...state.lastValues,action.payload]
			}; // take properties from old state and add it in new state object
			//immutable way of handling array n objects in redux
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues:[...state.lastValues,action.payload]
			}; 
			break;
		default:
			break;
	}
	return state;
};

const mylogger = (store) => (next) => (action) => {
	console.log("logged action "+ JSON.stringify(action));
	next(action);
}
//const store = createStore(
//	combineReducers({mathReducer,userReducer}),
//	{},
//	applyMiddleware(logger)
//	);

/**const store = createStore(
	combineReducers({mathReducer,userReducer}),
	{},
	applyMiddleware(mylogger,createLogger()));*/

const store = createStore(
	combineReducers({mathReducer,userReducer}),
	{},
	applyMiddleware(createLogger()));
store.subscribe(() => {
	console.log("store updated " + JSON.stringify(store.getState()));
})
store.dispatch({
 	type:"ADD",
 	payload:10
 });

store.dispatch({
 	type:"SUBTRACT",
 	payload:7
 });

store.dispatch({
	type:"SET_NAME",
	payload:"NEHA"
});

store.dispatch({
	type:"SET_AGE",
	payload:30
});