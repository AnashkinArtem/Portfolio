import React, {useEffect, useRef, useState} from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { IoIosSchool } from "react-icons/io";

import styles from '../accordion.module.scss'

const AccordionEducation = () => {
    const [selected, setSelected] = useState(false)
    const [height, setHeight] = useState('');

    const refHeigth = useRef<HTMLDivElement>(null);
       
    useEffect(() => {
       return(
         setHeight(`${refHeigth.current?.scrollHeight}px`)
       )
    }, [])
   
    const handleClick = () => {
      setSelected(!selected)
    }
  
  return (
    <div className={styles.accordion}>
        <div className={styles.accordion__wrapper}>
             <div className={styles.title__wrapper} onClick={handleClick}>
                <div className={styles.title}>Education</div>
                <div className={styles.plus}>{selected ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</div>
             </div>

             <div className={selected ? styles.animated : styles.content}
                  style={{minHeight: selected ? `${height}` : "0px"}}
                  ref={refHeigth}
            >
               <div className={styles.icon}><IoIosSchool /></div>
               <div className={styles.item}>
                 <div className={styles.item__institution}>BSMTC</div>
                 <div className={styles.item__descr}>Bobruisk State Mechanical and Technological College - Technician technologist</div>
                 <div className={styles.item__descr}>2011-2015</div>
               </div>
               <div className={styles.item}>
                 <div className={styles.item__institution}>UDEMY</div>
                 <div className={styles.item__descr}>Online course - WEB Developer</div>
                 <div className={styles.item__descr}>2021</div>
               </div>
               <div className={styles.item}>
                 <div className={styles.item__institution}>TeachMeSkills</div>
                 <div className={styles.item__descr}>Offline course - Frond End Developer</div>
                 <div className={styles.item__descr}>2021-2022</div>
               </div>
             </div>
        </div>
        
    </div>
  )
}

export default AccordionEducation