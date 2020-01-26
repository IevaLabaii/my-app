import React from 'react';
import './ListItems.css';
import {FontAwesomeIcons} from'@fortawesome/react-fontawesome';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item =>
  {
    return <div className="list" key="item.key">
      <p>{item.text}</p
      <span>
        <FontAwesomeIcons className="faicons" icon='minus'/>
      </span>
    </div>
  })
  return(
    <div>{listItems}</div>
  )
}
export default ListItems;
