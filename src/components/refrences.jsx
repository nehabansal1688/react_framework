import React from 'react';
import ReactDOM from 'react-dom';

export default class References extends React.Component {
	constructor(props){
		super(props);
		this.refrnce = React.createRef();
		this.focusText = this.focusText.bind(this);
		this.clearFocus = this.clearFocus.bind(this);
		this.getFocus = this.getFocus.bind(this);
		this.showTypesVal = this.showTypesVal.bind(this);
	}
	focusText() {		
		this.refrnce.current.focus();
	}
	clearFocus() {
		this.refrnce.current.blur();
		this.refrnce.current.value = "";
	}
	getFocus() {
		var input = ReactDOM.findDOMNode(this.refs.myInput);
		input.focus();
		input.value = "Focus is on Me";
	}
	showTypesVal() {
		alert(this.txt.value);
		alert(this.node.summary.value);
	}
	render() {
		return(
			<div className="container">
				<input type="text" ref={this.refrnce}/>
				<input type="button" onClick={this.focusText} value="Focus"/>
				<input type="button" onClick={this.clearFocus} value="Clear"/>
				<div>
					<input type="text" ref="myInput" value="No focus :("/>
					<input type="button" onClick={this.getFocus} value="Click Me"/>
				</div>
				<input type="text" defaultValue="Modify me" ref={(name) => this.txt = name} />
				<input type="button" onClick={this.showTypesVal} value="Show Value"/>
				<Children ref={(node) => {this.node = node;}}/>
			</div>
		);
	}
}

class Children extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
			<div>
				Summary:  <input type="text" ref={(name) => {this.summary = name;}}/>
			</div>
		);
	}
}

//Uncontrolled components -> state is maintained by DOM not by react and we can access elements by refs
