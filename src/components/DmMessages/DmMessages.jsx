

import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DmMessages(props) {

  const clientId = props.match.params.clientId

  const [items, setItems] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/getTextMessages',
        data: { clientId }
      })
       

      setItems(result.data)
      // setData(result.data);
    };

    fetchData();

    // await fetch('http://localhost:3000/sendText').then((result) => console.log(result.json()))
  }, [clientId])

  return (
    <div>
      <p>{`this is direct messages ${clientId}`}</p>
      {JSON.stringify(items)}
    </div>
  )
}

export default DmMessages
