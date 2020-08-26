
import React from 'react'
import { Redirect } from 'react-router-dom'

import Icon from '../../ui/Icon'
import { useAuth } from '../../context/auth'
import styles from './Home.module.scss'

import { AuthConsumer } from "../../context/authContext";


const homeProfile = (admin, logout) => {
  console.log(admin)
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        {/* <UI.Userpic url={admin.avatar_url} code={admin.avatar_code} size={100} /> */}
        <div className={styles.info}>
          <span>{`${admin.firstName} ${admin.lastName}`}</span>
          <i>{admin.email}</i>
        </div>

        <Icon
          name="exit"
          size={[40, 40]}
          className={styles.signout}
          title="Выпилиться из админки"
          onClick={logout}
        />
      </div>
    </div>
  )
}
function Home() {
  
  

  return (
    <AuthConsumer>
      {
        ({ logout, user }) => {
          return homeProfile(user, logout)
        }
      }
    </AuthConsumer>
  )
}




export default Home
