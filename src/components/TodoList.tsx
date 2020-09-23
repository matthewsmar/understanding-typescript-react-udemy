import React, { FunctionComponent } from 'react';

import './TodoList.css'

interface Item {
  id: string,
  text: string
}

interface OwnProps {
  items: Item[]
  onRemoveTodo: (id: string) => void
}


type Props = OwnProps;

const TodoList: FunctionComponent<Props> = (props) => {
  return <ul>
    {props.items.map((item) => (
      <li key={item.id} onClick={() => props.onRemoveTodo(item.id)}>{item.text}</li>
    ))}
    </ul>;
};

export default TodoList;

