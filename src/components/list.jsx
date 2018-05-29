import React from 'react';

const List = (props) => {
    var types = props.data;
  return (
    <div className="container">
      <h2>List</h2>
      
      <div  className="list-group">
        {
            types.map(function(type, index){
                return <a href="#" className="list-group-item active">{type.name}</a>;
            })
        }
        </div>
    </div>
  )
}

export default List;