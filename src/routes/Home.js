import React, { useState } from 'react';
import '../routes/Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../store';
import ToDo from '../components/ToDo';

const Home = () => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const toDo = useSelector((state) => state);
  console.log(toDo);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addToDo(text));
    setText('');
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write To do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
