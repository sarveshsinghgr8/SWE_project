import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/form" element={<SForm />} />
      <Route path="/addform" element={<AForm />} />
      <Route path="/withdraw" element={<WForm />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App