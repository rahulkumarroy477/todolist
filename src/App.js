import React, { useState } from 'react';
import Heading from './Heading';
import './App.css';
import Input from './Input';
import TodoList from './TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [prevTodo, setPrevTodo] = useState([]);

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);
  };

  let removeList = (key) => {
    let removedItem = listTodo[key];
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);

    if (prevTodo.length >= 5) {
      // If the history has reached its limit (5 items), remove the oldest one
      let newPrevTodo = [...prevTodo];
      newPrevTodo.shift();
      setPrevTodo([...newPrevTodo, removedItem]);
    } else {
      // If there is still space in the history, just add the removed item
      setPrevTodo([...prevTodo, removedItem]);
    }
  };

  return (
    <div className="main-container">
      <Heading txt="ToDo List" size={30} />
      <Input addList={addList} />
      <Heading txt="Current ToDo's" size={20} />
      <div style={{ listStyleType: 'none' }}>
        {listTodo.map((item, index) => (
          <TodoList key={index} index={index} value={item} removeList={removeList} close={1}/>
        ))}
        <Heading txt="Previously completed ToDo's" size={20} />
        {prevTodo.map((item, index) => (
          <TodoList key={index} value={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
