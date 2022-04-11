import React from 'react'
import Logo from 'src/base/Logo/Logo'
import avatar from 'src/image/ava.jpg'
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.container}>
          <Logo/>

          <div className={styles.header__wrapper}> 
            <div className={styles.header__hello}>
              <div className={styles.hello__title}>Hi, I am</div>
              <div className={styles.hello__name}>Artem Anashkin</div>
              <div className={styles.hello__career}>Front-end Developer</div>
            </div>
            <div className={styles.hello__image}>
              <img src={avatar} alt="avatar" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header