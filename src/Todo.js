import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
  return (
    <div style={{ display: 'flex' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <li style={{ textDecoration: todo.completed ? 'line-through' : null }}>
        {todo.task}
      </li>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
}

export default Todo;
