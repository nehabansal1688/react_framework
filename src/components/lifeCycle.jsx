import React from 'react';

class LifeCycle extends React.Component {
	constructor(props){
		super();
		this.state={
			test: "default value"
		}
	}
	componentWillMount() {
		this.setState({test:857657});
		console.log("componentWillMount" + this.state.test + "   :props" + this.props.data);
	}
	componentDidMount(){
		console.log("componentDidMount"  + this.state.test+ "   :props" + this.props.data);
	}
	componentWillReceiveProps() {
		console.log("componentWillReceiveProps"  + this.state.test+ "   :props" + this.props.data);
	}
	shouldComponentUpdate(){
		console.log("shouldComponentUpdate"  + this.state.test+ "   :props" + this.props.data);
		return true;
	}
	componentWillUpdate(){
		console.log("componentWillUpdate"  + this.state.test+ "   :props" + this.props.data);
	}
	componentDidUpdate(){
		console.log("componentDidUpdate"  + this.state.test+ "   :props" + this.props.data);	
	}
	componentWillUnmount(){
		console.log("componentWillUnmount"  + this.state.test+ "   :props" + this.props.data);
	}
	render(){
		return(
			<div></div>)
	}
}

export default LifeCycle;
