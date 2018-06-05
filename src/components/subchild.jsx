import React from 'react';

class Subchild extends React.Component {
	renderItems(){
		var items =this.props.data,
			elem;
		if(items.length>0) {
			elem =  items.map(function(item, index){
				var item = item.type ? item.type : item;
				return(<li key={index}>{item.toString()}</li>);
			})
		}
		return elem;
	}
				
	render(){
		return (
			<ul>{this.renderItems()}</ul>
		);
	}
}

export default Subchild;
