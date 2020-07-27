import React, { useState, memo, useEffect, useRef } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List, areEqual } from 'react-window';
import './Panel.scss'

const generateItems = (numItems) =>
  Array(numItems)
    .fill(true)
    .map(_ => ({
      isActive: false,
      label: Math.random()
        .toString(36)
        .substr(2),
    }));

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent

// @ts-ignore 
const Row = memo(({ data, index, style }) => {
  // Data passed to List as "itemData" is available as props.data
  const { items, toggleItemActive } = data;
  const item = items[index];

  return (
    <div onClick={() => toggleItemActive(index)} style={style}>
      {item.label} is {item.isActive ? 'active' : 'inactive'}
    </div>
  );
}, areEqual);

// This helper function memoizes incoming props,
// To avoid causing unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
const createItemData = memoize((items, toggleItemActive) => ({
  items,
  toggleItemActive,
}));

// In this example, "items" is an Array of objects to render,
// and "toggleItemActive" is a function that updates an item's state.
// @ts-ignore 
function Example({ height, items, toggleItemActive, width }) {
  // Bundle additional data to list items using the "itemData" prop.
  // It will be accessible to item renderers as props.data.
  // Memoize this data to avoid bypassing shouldComponentUpdate().
  const itemData = createItemData(items, toggleItemActive);

  return (
    <List
      height={height}
      itemCount={items.length}
      itemData={itemData}
      itemSize={35}
      width={width}
    >
      {Row}
    </List>
  );
}

function useWindowHeight() {
  const [height, setHeight] = useState(window.innerHeight);
  
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return height;
}

function Panel() {
  const [items, setItems] = useState(generateItems(1000))
  const height = useWindowHeight();

  const prevItemsRef = useRef();
  useEffect(() => {
    // 
    prevItemsRef.current = items;
  });


  const toggleItemActive = (index) => {
    const prevItems = prevItemsRef.current;
    const item = prevItems[index];
    const items = prevItems.concat();
    items[index] = {
      ...item,
      isActive: !item.isActive,
    };

    setItems(items)
  }


  return (
    <div className="panel">
    <Example
      height={height}
      items={items}
      toggleItemActive={toggleItemActive}
      width={300}
    />
    </div>
  );

}

export default memo(Panel)