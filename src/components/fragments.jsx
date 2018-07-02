import React from 'react';

export default class Fragments extends React.Component {
	render() {
		return(
			<Columns/>
		);
	}
}
function Columns() {
	//React frament will add empty element
	//without react fragment there will be error thrown as there can be just one parent element in react
	return(
		<React.Fragment>
	        <span>Hello </span>
	        <span>World</span>
      	</React.Fragment>
	);
}