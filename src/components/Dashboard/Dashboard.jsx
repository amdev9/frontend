
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Profile from '../ClientDashboard/Profile'

function Dashboard() {

  const [items, setItems] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/getComments',
      );


      // const result = await axios({
      //   method: 'POST',
      //   url: 'http://localhost:3000/sendComment',
      //   // data: { clientId }
      // })

      console.log(result.data)
      
      // setItems(result.data)
      // setItems(result.data[0].map(item => item.text))
      // setData(result.data);
    };

    fetchData();

    // await fetch('http://localhost:3001/sendText').then((result) => console.log(result.json()))
  }, [])


  return (
    <div>
      <Profile />
    </div>
  )
}

export default Dashboard
