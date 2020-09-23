import React, {useState} from 'react';

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from "./todo-model.js";

function App() {
  const [todos,  setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...todos,
      {id: Math.random().toString(), text: text}
      ])
  }

  const todoRemoveHandler = (id: string) => {
    setTodos(prevTodos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList onRemoveTodo={todoRemoveHandler} items={todos}/>
    </div>
  );
}

export default App;
