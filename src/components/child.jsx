import React from 'react';
import Subchild from './subchild.jsx';

class Child extends React.Component {
	constructor(){
		super();
		this.renderAryItems = this.renderAryItems.bind(this);
		this.renderObj = this.renderObj.bind(this);
	}

	renderAryItems(items,e){
		var elem = items.map(function(item,index){
					return(
						 <li key={index}> {item.type} </li>

					 )
				});

		return elem;
	}

	renderObj(items,e){
		var elem = Object.keys(items).map(function(key, index) {
						return (
						<div key={index}>	
							<span>{key}</span>
							<Subchild key={index} data={items[key]}/>
						</div>
						);
					});
		return elem;
	}
	render() {
		//dirty way of writing code
		//refer subChild component for more cleaner approach
		var items = this.props.items;
		if(items.length>0) {
			return(<ul>{this.renderAryItems(items)}</ul>);
		} else {
			return (<div>{this.renderObj(items)}</div>);
		}
	}
}
export default Child;