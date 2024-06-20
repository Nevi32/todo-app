import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">Welcome to the Todo App</h1>
        <p className="mb-8">Manage your tasks efficiently and with style.</p>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300 ease-in-out"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
