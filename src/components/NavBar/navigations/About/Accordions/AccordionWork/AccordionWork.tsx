import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import styles from '../accordion.module.scss'

const AccordionWork = () => {

 const [selected, setSelected] = useState(false)

  return (
    <div className={styles.accordion}>
        <div className={styles.accordion__wrapper}>
            <div className={styles.title__wrapper} onClick={() => setSelected(!selected)}>
                <div className={styles.title}>WORK EXPERIENCE</div>
                <div className={styles.plus} onClick={() => setSelected(!selected)}>{selected ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
            </div>
            {
            selected && 
            <div className={styles.content}>Work</div>
            }
        </div>    
    </div>
  )
}

export default AccordionWork