import React from 'react'

import facebook from "src/image/Footer/facebook.svg"
import telegram from "src/image/Footer/telegram.svg"
import linkedin from "src/image/Footer/linkedin.svg"
import instagram from "src/image/Footer/instagram.svg"
import github from "src/image/Footer/github.svg"

import styles from './footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__wrapper}>

            <div className={styles.footer__link}>
               <a href="https://t.me/artemanashkin" target="_blank" rel="noreferrer">
                <div className={styles.link__icon}>
                    <img src={telegram} alt="telegram" />
                </div>
                <div className={styles.link__title}>Telegram</div>
               </a>
            </div>

            <div className={styles.footer__link}>
               <a href="https://www.linkedin.com/in/artem-anashkin-848476229/" target="_blank" rel="noreferrer">
                <div className={styles.link__icon}>
                    <img src={linkedin} alt="linkedin" />
                </div>
                <div className={styles.link__title}>Linkedin</div>
               </a>
            </div>

            <div className={styles.footer__link}>
               <a href="https://www.facebook.com/artem.anashkin.100" target="_blank" rel="noreferrer">
                <div className={styles.link__icon}>
                    <img src={facebook} alt="facebook" />
                </div>
                <div className={styles.link__title}>Facebook</div>
               </a>
            </div>

            <div className={styles.footer__link}>
               <a href="https://www.instagram.com/artem.anashk1n/" target="_blank" rel="noreferrer">
                <div className={styles.link__icon}>
                    <img src={instagram} alt="instagram" />
                </div>
                <div className={styles.link__title}>Instagram</div>
               </a>
            </div>

            <div className={styles.footer__link}>
               <a href="https://github.com/AnashkinArtem" target="_blank" rel="noreferrer">
                <div className={styles.link__icon}>
                    <img src={github} alt="github" />
                </div>
                <div className={styles.link__title}>Github</div>
               </a>
            </div>

        </div>
    </div>
  )
}

export default Footer