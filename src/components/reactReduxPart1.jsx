import React from 'react';
import ReactRedux from './reactRedux.jsx';
import {Provider} from 'react-redux';
import store from './store.jsx';

export default class ReactReduxPart1 extends React.Component {
	render() {
		return(
			<div>
				<Provider store = {store}>
					<ReactRedux/>
				</Provider>
			</div>
		);
	}
}

store.subscribe(() => {
	console.log("store updated " + JSON.stringify(store.getState()));
})



