import React, { useState, useEffect, useRef, memo } from 'react';
import memoize from 'memoize-one';
import { FixedSizeList as List } from 'react-window';
import axios from 'axios'
import cn from 'classnames'

import useWindowHeight from './useWindowHeight'
import styles from './Panel.module.scss'

const createItemData = memoize((items, activeIndex, setActiveIndex) => ({
  items,
  activeIndex,
  setActiveIndex,
}));

function ItemsList({ height, items, activeIndex, setActiveIndex, width, itemComponent }) {
  const itemData = createItemData(items, activeIndex, setActiveIndex);

  console.log(itemComponent)
  return (
    <List
      height={height}
      itemCount={items.length}
      itemData={itemData}
      itemSize={35}
      width={width}
    >
      {itemComponent}
    </List>
  );
}

function Panel(props) {
  const { panelUrl, itemsComponent } = props  
  console.log('props ', props)
  const items = useItemsInitialization(panelUrl)
  const [activeIndex, setActiveIndex] = useState(null)
  const [height, setHeight] = useState(window.innerHeight);
  const widgetHeight = useWindowHeight(height, setHeight);

  return (
    <div className={styles.panel}>
      <ItemsList
        height={widgetHeight - 60}
        items={items}
        width={300}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        itemComponent={itemsComponent}
      />
    </div>
  );
}

export default memo(Panel)

function useItemsInitialization(url) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url)
      console.log(result.data)
      setItems(result.data)
    };
    fetchData();
  }, [url])

  return items
}