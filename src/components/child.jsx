import React from 'react';
import Subchild from './subchild.jsx';

class Child extends React.Component {
	render() {
		var items = this.props.items;
		if(items.length>0) {
			return(
				<ul>
					{
						items.map(function(item,index){
							return(
								 <li> {item.type} </li>

							 )
						})
					}
				</ul>
			);
		} else {
			return (
				<div>{
					Object.keys(items).map(function(key) {
						return ( 
							
							<Subchild data={items[key]}/>
						);
					})
				}
				</div>
			);
		}
	}
}
export default Child;
