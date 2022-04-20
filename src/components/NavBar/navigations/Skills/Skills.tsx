import React from 'react'
import SkillsList from './SkillsList/SkillsList'
import styles from './skills.module.scss'






const Skills: React.FC = () => {

  return (
    <>
      <div className={styles.skills}>
        <div className={styles.skills__wrapper}>
          <SkillsList skills={[]}/>
        </div>
      </div>        
    </>
  )
}

export default Skills