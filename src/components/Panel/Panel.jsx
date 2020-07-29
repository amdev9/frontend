import React, { useState, useEffect, memo, useRef } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List } from 'react-window';
import axios from 'axios'
import Row from './Row'
import useWindowHeight from './useWindowHeight'
import './Panel.scss'



// This helper function memoizes incoming props,
// To avoid causing unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
// const createItemData = memoize((items) => ({
//   items,
// }));

// In this example, "items" is an Array of objects to render,
// and "toggleItemActive" is a function that updates an item's state.
// @ts-ignore 
function Example({ height, items, width }) {
  // Bundle additional data to list items using the "itemData" prop.
  // It will be accessible to item renderers as props.data.
  // Memoize this data to avoid bypassing shouldComponentUpdate().
  // const itemData = createItemData(items);

  // console.log(itemData)
  return (
    <List
      height={height}
      itemCount={items.length}
      itemData={items}
      itemSize={35}
      width={width}
    >
      { Row }
    </List>
  );
}

function Panel(props) {
  const [items, setItems] = useState([])
  const [height, setHeight] = useState(window.innerHeight);
  const widgetHeight = useWindowHeight(height, setHeight);


  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/getThreads',
      );

      console.log(result.data)
      setItems(result.data)
      // setItems(result.data[0].map(item => item.text))
      // setData(result.data);
    };
 
    fetchData();

    // await fetch('http://localhost:3000/sendText').then((result) => console.log(result.json()))
  }, [])

  return (
    <div className="panel">
      
      <Example
        height={widgetHeight - 60}
        items={items}
        width={300}
      />
    </div>
  );

}

export default memo(Panel)