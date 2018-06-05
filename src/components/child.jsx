import React from 'react';
import Subchild from './subchild.jsx';

class Child extends React.Component {
	render() {
		//dirty way of writing code
		//refer subChild component for more cleaner approach
		var items = this.props.items;
		if(items.length>0) {
			return(
				<ul>
					{
						items.map(function(item,index){
							return(
								 <li key={index}> {item.type} </li>

							 )
						})
					}
				</ul>
			);
		} else {
			return (
				<div>{
					Object.keys(items).map(function(key, index) {
						return (
						<div key={index}>	
							<span>{key}</span>
							<Subchild key={index} data={items[key]}/>
						</div>
						);
					})
				}
				</div>
			);
		}
	}
}
export default Child;
