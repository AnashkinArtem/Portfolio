import React from 'react'

import styles from './logo.module.scss'

import logo from '../../icons/logo.png'

const Logo = () => {
  return (    
    <div className={styles.logo__wrapper}>
      <a href="https://anashkinartem.github.io/portfolio/">        
        <img src={logo} alt="logo" />
      </a>
    </div>
    
  )
}

export default Logo