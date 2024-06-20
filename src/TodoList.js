import React from 'react';

function TodoList({ todos, toggleComplete, removeTodo }) {
  return (
    <div className="bg-white p-6 shadow-md rounded">
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through' : ''}>{todo.task}</span>
              <span className="ml-4 text-gray-500">{todo.date}</span>
            </div>
            <button onClick={() => removeTodo(todo.id)} className="text-red-500 hover:underline">
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
