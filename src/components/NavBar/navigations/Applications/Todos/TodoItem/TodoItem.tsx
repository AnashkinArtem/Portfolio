import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useAppDispatch } from '../../../../../../app/hooks';
import { removeTodo, toggleComplete } from '../../../../../../features/todoSlice';

import styles from './item.module.scss'



interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {

  const dispatch = useAppDispatch()

  return (
    <>
    <div className={styles.todo__item}>
      <input 
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))} 
      />
      <div className={styles.todo__title}>{title}</div>
      <FaTrash onClick={() => dispatch(removeTodo(id))}/>
    </div>
    </>
  )
}

export default TodoItem