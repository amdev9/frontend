
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Icon from '../../ui/Icon'
import { useAuth } from '../../context/auth'
import styles from './Home.module.scss'

import { AuthConsumer } from "../../context/authContext";
import Axios from 'axios'

function Home() {

  const [igUsername, setIgUsername] = useState('')
  const [igPassword, setIgPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(igUsername, igPassword)

    const result = await Axios({
      method: 'POST',
      url: 'http://localhost:3000/setIGLoginData',
      data: { 
        username: igUsername, 
        password: igPassword 
      }
    })
    console.log(result)
  }

  const homeProfile = (admin, logout) => {
    return (
      <>
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
      </>
    )
  }


  return (
    <AuthConsumer>
      {
        ({ logout, user }) => {
          return (

            <div className={styles.root}>
              <div className={styles.head}>

                {homeProfile(user, logout)}
                <form onSubmit={onSubmit}>
                  {/* className={''} */}
                  <label>Добавить профиль инстаграм</label>
                  <input name="username" placeholder="username" value={igUsername} onChange={(e) => setIgUsername(e.target.value)} />
                  <input name="password" placeholder="password" value={igPassword} onChange={(e) => setIgPassword(e.target.value)} />
                  <input type="submit" />
                </form>
                

              </div>
            </div>


          )
        }
      }
    </AuthConsumer>
  )
}




export default Home
