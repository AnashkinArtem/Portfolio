import React from 'react'
import { useAppSelector } from '../../../../../../app/hooks'
import TodoItem from '../TodoItem/TodoItem'

import styles from './list.module.scss'

const TodoList: React.FC = () => {

  const todos = useAppSelector(state => state.todos.list)

  return (
    <>
    <div className={styles.todo__list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} 
          {...todo}
        />
      ))}
    </div>
    </>
  )
}

export default TodoList