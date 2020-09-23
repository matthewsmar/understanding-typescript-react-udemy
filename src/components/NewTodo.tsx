import React, { FunctionComponent, useRef } from 'react';

import './NewTodo.css'

interface OwnProps {
  onAddTodo: (text: string) => void
}

type Props = OwnProps;

const NewTodo: FunctionComponent<Props> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    props.onAddTodo(textInputRef.current!.value)
  }
  return <form onSubmit={todoSubmitHandler}>
    <div className='form-control'>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" id="todo-text" ref={textInputRef}/>
    </div>
    <button type="submit">ADD TODO</button>
  </form>;
};

export default NewTodo;
