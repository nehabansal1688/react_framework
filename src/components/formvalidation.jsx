import React from 'react';
import '../../styles/components/formvalidation.scss';

class Formvalidation extends React.Component {
	constructor(){
	    super();
	    this.state = {
	      items:[],
	      name:"",
	      age:30,
	      email:"",
	      level:"expert",
	      proof:false,
	      nameError: "",
	      emailError: "",
	      nestedProp: {
	      	level1:"",
	      	level2:""
	      }
	    };
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.validateFields = this.validateFields.bind(this);
	}
	handleChange(e) {
		var name = e.target.name;
		var val = e.target.value;
		this.setState({[name]: val},() =>{
			this.validateFields(name,val)
		});
	}
	validateFields(key,value) {
		
		switch(key) {
			case "name":
				if(/[^a-zA-Z0-9]/.test(value)) {
				    this.setState({nameError:"Name should not contain special charcters"});
				}else if(value.trim().length <1) {
					this.setState({nameError:"Name cannot be empty"});
				} else {
					this.setState({nameError:""});
				}
				break;
			case "email":
				if(value.trim().length < 1){
					this.setState({emailError:"Email should not be empty"});
				}else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)){
					this.setState({emailError:"Please enter proper email id"});
				} else {
					this.setState({emailError:""});
				}
				break;
			default:
				break; 
		}
	}
	handleSubmit() {
		var updatedState = Object.assign({},this.state);
		updatedState.nestedProp.level1 = "1";
		updatedState.nestedProp.level2 = "2";
		this.setState(updatedState);
		alert(JSON.stringify(this.state));
	}
   render(){
	    return (
		  <div>
	      		<form className="container form-horizontal" onSubmit={this.handleSubmit}>
	      			<div className="row form-group">
	      				<div className="col-sm-2">
	      					User name:
	      				</div>
	      				<div className="col-sm-4">
	      					<input type="text" className={"form-control " + (this.state.nameError != "" ? 'input-error' : '')} name="name" value={this.state.name} onChange={this.handleChange}/>
	      					<span className="error">{this.state.nameError}</span>
	      				</div>
	      			</div>
	      		<div className="row form-group">
	      				<div className="col-sm-2">
	      					Email:
	      				</div>
	      				<div className="col-sm-4">
	      					<input className={"form-control" + (this.state.emailError != "" ? ' input-error' : '')  } type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
	      					<span className="error">{this.state.emailError}</span>
	      				</div>
	      			</div>
	      			<div className="row form-group">
	      				<div className="col-sm-2">
	      					Age:
	      				</div>
	      				<div className="col-sm-4">
	      					<input className="form-control" type="number" min="10" max="90" name="age" value={this.state.age} onChange={this.handleChange}/>
	      				</div>
	      			</div>
	      			<div className="row form-group">
	      				<div className="col-sm-2">
	      					Attached Id Proof:
	      				</div>
	      				<div className="col-sm-4">
	      					<input className="form-control" type="checkbox" name="proof" checked={this.state.proof} onChange={this.handleChange}/>
	      				</div>
	      			</div>
	      			<div className="row form-group">
	      				<div className="col-sm-2">
	      					Select level:
	      				</div>
	      				<div className="col-sm-4">
	      					<select className="form-control" name="level" value={this.state.level} onChange={this.handleChange}>
					            <option value="begginer">begginer</option>
					            <option value="intermediate">intermediate</option>
					            <option value="expert">expert</option>
					          </select>
	      				</div>
	      			</div>
	      			
	      			<div className="row form-group">
	      				<div className="col-sm-6">
	      					<input className="form-control btn btn-info" type="submit" value ="submit"/>
	      				</div>
	      			</div>
	      		</form>
		  </div>
	  );
	}
}
export default Formvalidation;
