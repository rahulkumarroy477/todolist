import React from 'react';
import styles from './TodoList.module.css';
function TodoList(props) {
  return (
    <li className={styles['item-list']}>
        <h2 className={props.close!==1 && styles['cross-text']}>{props.value}</h2>
        {props.close && <span className={styles['cross']} 
        onClick={e=>{props.removeList(props.index)}}>X</span>}
    </li>
  )
}

export default TodoList