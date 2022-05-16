import React, { useState } from 'react'
import { useAppDispatch } from 'src/app/hooks'
import { addTodo } from 'src/features/todoSlice'
import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'

import styles from './todos.module.scss'

const Todos = () => {

  const [text, setText] = useState('')
  const dispatch = useAppDispatch();

  const handleAction = () => {
      if (text) {
          dispatch(addTodo(text));
          setText('')
      }
  }


  return (
    <>
      <div className={styles.todos}>
        <div className={styles.todos__wrapper}>
          <div className={styles.todos__title}>todo</div>
          <TodoForm 
            value={text}
            updateText={setText}
            handleAction={handleAction}
          />
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default Todos