import React from 'react';
import {connect} from 'react-redux';

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.incrementCouter = this.incrementCouter.bind(this);
		this.decrementCouter = this.decrementCouter.bind(this);
	}
	incrementCouter() {
	 	this.props.dispatch({type:"INCREMENT"});
	}
	decrementCouter() {
 		this.props.dispatch({type:"DECREMENT"});
	}

	render(){
	  return (
	    <div className="container">
	      <h2>Contact</h2>
	       <button className ="btn-default" type="button" onClick={this.incrementCouter}>+</button>
	       <span>{this.props.count}</span>
	       <button className ="btn-default" type="button" onClick={this.decrementCouter}>-</button>
	    </div>
  	)}	
}
const mapStateToProps = state => ({
	count: state.count
})
export default connect(mapStateToProps)(Contact);

/**import React from 'react';

const Contact = React.createClass({ 
	incrementCouter() {
	 	this.setState({
	 		count: this.state.count +1
	 	});
	},
	decrementCouter() {
 		this.setState({
 			count : this.state.count -1
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
	       <button className ="btn-primary" type="button" onClick={this.decrementCouter}>Decrement</button>
	    </div>
  	)}
});

export default Contact;**/
