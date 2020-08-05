import React from 'react';
import styles from './Header.module.scss'


function Header(props) {

  const fullName = 'fullName'

  const closingTask = () => {

    console.log('Create closing endpoint /api/tasks/taskId')
    // Request Method: DELETE
    // Status Code: 200 
  }
  return (
    <div className={styles.root}>
      <div className={styles.panel}>


      <div className={styles.flexRow}>
        <div className={styles.top}>
          <div className={styles.clientName} title={fullName}>
            {fullName}
          </div>
          <div className={styles.status}>
            {`Последний визит 1 день назад`}
          </div>
        </div>

        <div className={styles.task} onClick={closingTask}>
          {/*  key={ task.id } */}
          {/* <div className={styles.close}> */}
            {/* <div > */}
              Закрыть
              {/* </div> */}
          {/* </div> */}
        </div>
        </div>

      </div>
    </div>

  );
}

export default Header;