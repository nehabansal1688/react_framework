import React from 'react';


class FormTxtArea extends React.Component {
	constructor(props){
		super();
		this.state = {
			achievment: "",
			error:""
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		var name = e.target.name;
		var value = e.target.value;
		if(value.trim()<1){
			this.setState({error:"Field cannot be empty"});
		} else {
			this.setState({[name]:value});
			this.props.onValueChange(name,value);
		}
	}
	render() {
		return(
			<div className="row form-group">
  				<div className="col-sm-2">
  					Achievments:
  				</div>
  				<div className="col-sm-4">
  					<textarea className="form-control" name="achievment" value={this.state.achievment} onChange={this.handleChange}>
  					</textarea>
  					<span className="error">{this.state.error}</span>
  				</div>
  			</div>
		);
	}
}

export default FormTxtArea;
