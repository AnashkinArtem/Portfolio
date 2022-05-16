import React from 'react'

import styles from './form.module.scss'

interface TodoFormProps {
  value: string;
  handleAction: () => void;
  updateText: (str: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({value, handleAction, updateText}) => {
  return (
    <>
      <div className={styles.todo__form}>

        <input 
          type="text"
          placeholder='Add Todo'
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />

        <button onClick={handleAction}>add</button>
      </div>
    </>
  )
}

export default TodoForm