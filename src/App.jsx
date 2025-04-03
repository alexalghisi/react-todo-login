import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TodoList from './components/TodoList';

const App = () => {
  const [user, setUser] = useState(null);

  return (
      <Router>
        <div className="App">
          {!user ? (
              <Login setUser={setUser} />
          ) : (
              <TodoList />
          )}
        </div>
      </Router>
  );
}

export default App;
