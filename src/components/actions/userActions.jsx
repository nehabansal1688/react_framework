export function setName(name) {
	//async actions
	return dispatch => {
		setTimeout(() => {
			dispatch({
				type:"SET_NAME",
				payload: name
			});
		},2000);
	}
}

export function setAge(age) {
	return {
		type:"SET_AGE",
		payload: age
	};
}

//when we have to get data from server for particular action
//thunk wnt be abl to handle this. we need redux-promise-middleware
//we need ro chnage the reducere action to set_age_fulfilled and pass this promise() as an argument to the middleware
export function resetAge(age) {
	return {
		type:"SET_AGE",
		payload: new Promise((resolve, reject)=> {
			setTimeout(() => {
				resolve(age);
			}, 2000);
		})
	};
}