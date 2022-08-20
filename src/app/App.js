import { Routes, Route, useNavigate } from 'react-router-dom'
import React from 'react'

// import Login from './components/Login'
import { Login } from '../pages'
import { Home } from '../pages'
import { Join } from '../pages'

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />}></Route>
      <Route path='join' element={<Join />}></Route>
      <Route path='/*' element={<Home />}></Route>
    </Routes>
  )
}

export default App
