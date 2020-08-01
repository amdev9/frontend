import React, { useState, useEffect, useRef, memo } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List } from 'react-window';
import axios from 'axios'
import cn from 'classnames'
import Row from './Row'
import useWindowHeight from './useWindowHeight'
import styles from './Panel.module.scss'



const createItemData = memoize((items, activeIndex, setActiveIndex) => ({
  items,
  activeIndex,
  setActiveIndex,
}));


function Example({ height, items, activeIndex, setActiveIndex, width }) {


  const itemData = createItemData(items, activeIndex, setActiveIndex);

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

function Panel(props) {
  const [items, setItems] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)
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
    <div className={styles.panel}>
      <Example
        height={widgetHeight - 60}
        items={items}
        width={300}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );

}


// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}


export default memo(Panel)