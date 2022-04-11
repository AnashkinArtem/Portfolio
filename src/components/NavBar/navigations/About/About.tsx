import React from 'react'
import AccordionEducation from './Accordions/AccordionEducation/AccordionEducation'

import styles from './about.module.scss'
import AccordionWork from './Accordions/AccordionWork/AccordionWork'

const About = () => {
  return (
    <>
        <div className={styles.about}>
          <div className={styles.about__wrapper}>
            <div className={styles.about__info}>
              <div className={styles.about__title}>
                about me
              </div>
              <p>
                My name is Artem Anashkin, a graduate of the <a href="https://teachmeskills.by/" target='_blank' rel="noreferrer">TeachMeSkills</a> programming School in Minsk. I studied interface             technologies for a year, and that was enough time for me to make sure that this is my place in the industry.                
              </p>
               <p> 
                 I speak basic English (spoken and written). In addition to developing and programming websites, I am fond of all kinds of sports and spend my free time in the company of friends.
              </p>
            </div>
            <div className={styles.accordions}>
              <AccordionEducation/>
              <AccordionWork/>
            </div>
          </div>          
        </div>
    </>
  )
}

export default About