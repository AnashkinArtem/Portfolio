import React from 'react'
import tms from '../../../../image/Certificates/tms.jpg'
import udemyru from '../../../../image/Certificates/udemy_ru.png'
import udemyen from '../../../../image/Certificates/udemy_en.png'

import styles from './certificates.module.scss'

const Certificates = () => {
  return (
    <>
        <div className={styles.certificates}>
          <div className={styles.certificates__wrapper}>
            <div className={styles.certificates__item}>
              <div className={styles.item__img}>
                <img src={tms} alt="tms" />
              </div>
            </div>
            <div className={styles.certificates__item}>
              <div className={styles.item__img}>
                <img src={udemyru} alt="udemyru" />
              </div>
            </div>
            <div className={styles.certificates__item}>
              <div className={styles.item__img}>
                <img src={udemyen} alt="udemyen" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Certificates