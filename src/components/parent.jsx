import React from 'react';
import $ from 'jquery';
import Child from './child.jsx';
import '../../styles/components/parent.scss';

class Parent extends React.Component {
	constructor() {
		super()
		this.state = {
			data :[],
			isDataLoaded: false
		};
	}
	componentDidMount() {
 		$.ajax({
	      url: 'https://api.myjson.com/bins/b55la',
	      dataType: 'json',
	      success: function(parsed_json){
	        this.setState({data: parsed_json});
	        this.setState({isDataLoaded:true});
	      }.bind(this)
      	});
	}
	render(){
		var isLoaded = this.state.isDataLoaded,
			content;
		if(isLoaded){
			content = 	<div>
					{
						this.state.data.map(function(item, index) {
							return (
								<div className="row" key={index}>
									<div className="col-sm-4">
										{item.name}
									</div>
									<div className="col-sm-4">
										<Child items={item.topping}/>
									</div>
									<div className="col-sm-4">
										<Child items={item.batters}/>
									</div>


								</div>
							)
						})
					}

				</div>
		}else {
			content = <div className="loader"></div>
		}
		return(<div className="container">{content}</div>);
	}
}

export default Parent;