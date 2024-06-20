import React from 'react';

function Navbar({ setView }) {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div>
        <button onClick={() => setView('home')} className="hover:underline">Home</button>
        <button onClick={() => setView('add')} className="ml-4 hover:underline">Add Todo</button>
        <button onClick={() => setView('list')} className="ml-4 hover:underline">View Todos</button>
      </div>
    </nav>
  );
}

export default Navbar;
