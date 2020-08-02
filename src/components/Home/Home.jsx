
import React from 'react'
import Icon from '../../ui/Icon'
import styles from './Home.module.scss'

function Home() {

  const admin = {
    name: 'Logged_in_username',
    email: 'someemail@gmail.com',
  }

  function logout() {
    console.log('logout handler')
  }

  // throw new Error('I crashed!');
  return (
    <div className={styles.root}>
      <div className={styles.head}>
        {/* <UI.Userpic url={admin.avatar_url} code={admin.avatar_code} size={100} /> */}

        <div className={styles.info}>
          <span>{admin.name}</span>
          <i>{admin.email}</i>
        </div>

        {/* <Icon
          name="exit"
          size={[40, 40]}
          className={styles.signout}
          title="Выпилиться из админки"
          onClick={logout}
        /> */}

        {/* <button
          name="exit"
          // size={[40, 40]}
          className={styles.signout}
          value=""
          onClick={logout}
        >Выпилиться из админки
        </button> */}

        <Icon
            name="exit"
            size={ [40, 40] }
            className={ styles.signout }
            title="Выпилиться из админки"
            onClick={ logout }
          />

      </div>
    </div>
  )
}




export default Home
