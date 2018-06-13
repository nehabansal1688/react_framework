import React from 'react';


class FormTxtBox extends React.Component {
	constructor(props){
		super();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.props.onValueChange(e);
	}
	render() {
		//throw new Error("ddddd");
		return(
			<div className="row form-group">
  				<div className="col-sm-2">
  					Qualification:
  				</div>
  				<div className="col-sm-4">
  					<input type="text" className="form-control" name="qualification" onChange={this.handleChange} value={this.props.edu}/>
  				</div>
  			</div>
		);
	}
}

export default FormTxtBox;
