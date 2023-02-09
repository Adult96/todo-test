import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState(['리액트 배우기']);

  const handleSubmit = e => {
    e.preventDefault();
    setTodo([...todo, title]);
    setTitle('');
  };

  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  return (
    <>
      <form className='addTodo' onSubmit={handleSubmit}>
        제목:
        <input
          className='title'
          type='text'
          value={title}
          onChange={handleChangeTitle}
        />
        <button className='add'>추가하기</button>
      </form>
      <h1>Todo List</h1>
      <ul className='list'>
        {todo.map((item, index) => (
          <li key={index} className='item'>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
