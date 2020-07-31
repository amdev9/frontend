import React from 'react';
import styles from './Header.module.scss'


function Header(props) {

  const fullName = 'fullName'
  return (
    <div className={styles.root}>
      <div className={styles.panel}>
        <div className={styles.top}>
          <div className={styles.clientName} title={fullName}>
            {fullName}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;