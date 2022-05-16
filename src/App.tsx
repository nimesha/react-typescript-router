import React, { useState } from 'react';
import './App.css';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Profile from './pages/profile/Profile';
import Product from './pages/product/Product';
import Products from './pages/product/Products';

function App() {
  const [user] = useState<boolean>(true);
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/users" element={<Navigate to="/login" />} />
          <Route
            path="/profile"
            element={
              user ? <Navigate to="/profile" /> : <p>Forbidden to access</p>
            }
          />
        </Routes>
      </header>
      <button onClick={() => navigate('profile')}> See Profile </button>
      <Routes>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
