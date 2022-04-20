import React from 'react'
import { Skill } from 'src/utils/interfaces/interfaces'
import dataSkills from '../../../../../base/Data/dataSkills'
import SkillsItem from '../SkillsItem/SkillsItem'

interface IProps{
    skills: Skill[]
}

const SkillsList: React.FC<IProps> = ({skills}): JSX.Element => {

    const data = dataSkills

  return (
    <>
    {
        
        data.map((skill) => {
            return(
                <SkillsItem
                    key={Date.now()} 
                    icon={skill.icon} 
                    title={skill.title} 
                    description={skill.description}                
                />
            )            
        })
    }
    </>
  )
}

export default SkillsList