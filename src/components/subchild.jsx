import React from 'react';

class Subchild extends React.Component {

	render(){
		var items = this.props.data;
		if(items.length>0){
			return (
				<div>
				</div>
			)
		}else {
			return(<div></div>);
		}
		
	}
}

export default Subchild;
