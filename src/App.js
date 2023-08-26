import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App