import { Routes, Route, useNavigate } from 'react-router-dom'
import React from 'react'

// import Login from './components/Login'
import Join from './components/auth/Join'
import Home from './containers/Home'

const App = () => {
  return (
    <Routes>
      {/* <Route path='login' element={<Login />}></Route> */}
      <Route path='join' element={<Join />}></Route>
      <Route path='/*' element={<Home />}></Route>
    </Routes>
  )
}

export default App
