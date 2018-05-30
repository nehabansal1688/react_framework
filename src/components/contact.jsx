import React from 'react';

const Contact = React.createClass({ 
	 incrementCouter() {
	 	this.setState({
	 		count: this.state.count +1
	 	});
	},
	getInitialState() {
		return {
			count:0
		}
	},
	render(){
	  return (
	    <div>
	      <h2>Contact</h2>
	      <h3>Counter value : {this.state.count}</h3>
	       <button className ="btn-primary" type="button" onClick={this.incrementCouter}>Increment</button>
	    </div>
  	)}
});

export default Contact;
