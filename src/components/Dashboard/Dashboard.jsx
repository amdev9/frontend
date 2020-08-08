
import React from 'react'
import axios from 'axios'
import Products from '../Products'
import Customers from '../Products'

function Dashboard() {
  return (
    <div>
      <Products />
      <Customers />
    </div>
  )
}

export default Dashboard
