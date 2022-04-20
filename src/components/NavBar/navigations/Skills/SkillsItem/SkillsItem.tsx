import React from 'react'


import styles from './item.module.scss'

interface IProps {
    icon: string;
    title: string;
    description: string;
}

const SkillsItem: React.FC<IProps> = ({icon, title, description}): JSX.Element => {
  return (
      <>
        <div className={styles.skills__item}>
            <div className={styles.skills__img}><img src={icon} alt="html" /></div>
            <div className={styles.skills__title}>{title}</div>
            <div className={styles.skills__descr}>{description}</div>   
        </div> 
      </>
  )
}

export default SkillsItem