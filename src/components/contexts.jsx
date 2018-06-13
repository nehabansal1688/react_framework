import React from 'react';

//create context for the theme
const Theme = React.createContext("themeName");

export default class Contexts extends React.Component {
	render(){
		return(
			<Theme.Provider value="blue">
				<Element/>
			</Theme.Provider>
		);
	}
}

class Element extends React.Component {
	render(){
		return <SubElement/>
	}
}

function SubElement(props){
	return(<LastElement/>);
}

class LastElement extends React.Component {
	render(){
		return(
			<div className="container">
			 	<Theme.Consumer>
			      {val => <input type="button" className="btn-default" value={val} style={{background:val}}/>}
			    </Theme.Consumer>
		    </div>
		);
	}
}

//without passing blue color to element n subElement we could access the value in lastElement component
//but contexts are difficult to debug
//createContexts return provider and consumer object
//context's provider is used to pass the value to lower levels childs
//cotext's consumer is used to access the passed value
