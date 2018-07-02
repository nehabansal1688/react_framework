/**import {createStore} from 'redux';
 
const reducer => (state,action) {
	switch(action.type) {
		case "ADD":
			state = state + action.payload;
			break;
		case "SUBTRACT":
			state = state - action.payload;
			break;
		default:
			break;
	}
	return state;
};
const store = createStore(reducer,1);
store.subscribe(() => {
	console.log("store updated " + store.getState());
})
store.dispatch({
 	type:"ADD",
 	payload:10
 });

store.dispatch({
 	type:"SUBTRACT",
 	payload:7
 });

**/

//state with initialized data


/**
import {createStore} from 'redux';
 
const initializeState = {
	result: 1,
	lastValues:[]
}
const reducer = (state = initializeState,action)  => {
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

const store = createStore(reducer);
store.subscribe(() => {
	console.log("store updated " + store.getState());
})
store.dispatch({
 	type:"ADD",
 	payload:10
 });

store.dispatch({
 	type:"SUBTRACT",
 	payload:7
 });
 **/

import {createStore, combineReducers} from 'redux';
 
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



const store = createStore(combineReducers({mathReducer,userReducer}));
store.subscribe(() => {
	console.log("store updated " + store.getState());
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

