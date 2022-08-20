import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navigation from './Navigation'
import React from 'react'

import { AnimePage } from '../pages'
import { AnimeList } from '../pages'
import { Login } from '../pages'
import { Home } from '../pages'
import { Join } from '../pages'

const App = () => {
  return (
    <Box>
      <Navigation />
      <Routes>
        <Route path='/*' element={<AnimeList />}></Route>
        <Route path='/anime/:slug' element={<AnimePage />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='join' element={<Join />}></Route>
      </Routes>
    </Box>
  )
}

export default App
