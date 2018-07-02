const mathReducer = (state = {
	result: 1,
	lastValues:[]
},action)  => {
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
export default mathReducer;