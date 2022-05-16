import React from 'react'
import Counter from './Counter/Counter'
import Todos from './Todos/Todos'

import styles from './applications.module.scss'



const Applications = () => {
  return (
    <>
        <div className={styles.applications}>
            <div className={styles.applications__wrapper}>
              <Counter/>
              <Todos/>
            </div>
        </div>
    </>
  )
}

export default Applications