import React, { useState } from 'react';
import styles from './Input.module.css'; // Import the CSS module with styles object

function Input(props) {
  const [inputText, setInputText] = useState('');

  return (
    <div className={styles['input-container']}>
      <input
        type="text"
        placeholder="Enter your todo"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      <button
        className={styles.btn}
        onClick={() => {
          if (inputText !== '') {
            props.addList(inputText);
            setInputText('');
            console.log(inputText);
          }
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default Input;
