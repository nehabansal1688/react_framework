import React from 'react';
import $ from 'jquery';
import Child from './child.jsx';

class Parent extends React.Component {
	constructor() {
		super()
		this.state = {
			data :[]
		};
	}
	componentDidMount() {
 		$.ajax({
	      url: 'https://api.myjson.com/bins/b55la',
	      dataType: 'json',
	      success: function(parsed_json){
	        this.setState({data: parsed_json});
	      }.bind(this)
      	});
	}
	render(){
		return(
			<div className="container">
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
		);
	}
}

export default Parent;
