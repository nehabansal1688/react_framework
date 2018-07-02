import React from 'react';
import {connect} from 'react-redux';
import {setName} from './actions/userActions.jsx';

class ReactRedux extends React.Component {
	constructor(){
		super();
	}
	render(){
		return(
			<div className="container">
				<Main changeUserName= {() => this.props.setName("test name")}/>
				<User username ={this.props.user.name}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user : state.userReducer,
		math: state.mathReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName:(name) => {
			dispatch(setName(name));
		}
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(ReactRedux);

class Main extends React.Component {
	 render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.changeUserName('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
    }
}
class User extends React.Component {
	render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <p>User Name: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }
}


 
