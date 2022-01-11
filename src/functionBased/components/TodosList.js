import React from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prop-types
const TodosList = ({
  // eslint-disable-next-line react/prop-types
  todos, handleChangeProps, deleteTodoProps, setUpdate,
}) => (
  <ul>
    {
    // eslint-disable-next-line react/prop-types
    todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))
}
  </ul>
);
export default TodosList;
