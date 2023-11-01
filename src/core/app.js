import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../routes/login';
import Overview from '../routes/overview';
import ShoppingList from '../routes/shopping_list';

function App() {
  const [activeRoute, setActiveRoute] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setActiveRoute={setActiveRoute} />} />
        <Route path="/list" element={<Overview setActiveRoute={setActiveRoute} />} />
        <Route path="/shopping_list" element={<ShoppingList setActiveRoute={setActiveRoute} />} />
      </Routes>
    </Router>
  );
}

export default App;
