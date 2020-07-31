import React, { useState, useEffect, memo } from 'react';
// import memoize from 'memoize-one';
import { FixedSizeList as List } from 'react-window';
import axios from 'axios'
import cn from 'classnames'
import Row from './Row'
import useWindowHeight from './useWindowHeight'
import styles from './Panel.module.scss'




function Example({ height, items, width }) {

  return (

    <List
      height={height}
      itemCount={items.length}
      itemData={items}
      itemSize={35}
      width={width}
    >
      {Row}
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
    <div className={styles.panel}>
      <Example
        height={widgetHeight - 60}
        items={items}
        width={300}
      />
    </div>
  );

}

export default memo(Panel)