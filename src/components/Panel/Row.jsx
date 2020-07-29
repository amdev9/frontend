import React, { memo } from 'react'
import { areEqual } from 'react-window'
import { Link } from 'react-router-dom'

import Userpic from './Userpic'

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent

function Row(props) {
  console.log(props)
  // Data passed to List as "itemData" is available as props.data
  const { data, index, style } = props
  const items = data;
  const item = items[index];
  const src = require('./Untitled.png')
 
  return (
    // onClick={() => toggleItemActive(index)} 

    
    // {item.isActive ? 'active' : 'inactive'}
    <div style={style}>
      <Link to={`/direct/t/${item}`}>
        {/* <Userpic src={src} alt={item.label} size={20}/> */}
        {item}
      </Link>
    </div>
  );
};

export default memo(Row, areEqual)