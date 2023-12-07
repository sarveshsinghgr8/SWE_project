import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Forms from './components/Form'
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/form" element={<Forms />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App