import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const [view, setView] = useState('home');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = ({ task, date }) => {
    setTodos([...todos, { id: uuidv4(), task, date, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar setView={setView} />
      <div className="flex-grow p-4">
        {view === 'home' && <h2 className="text-2xl">Welcome to your Todo Dashboard</h2>}
        {view === 'add' && <TodoForm addTodo={addTodo} />}
        {view === 'list' && <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />}
      </div>
    </div>
  );
}

export default Dashboard;

