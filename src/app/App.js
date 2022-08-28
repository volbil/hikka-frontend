import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navigation from './Navigation'
import Updates from './Updates'
import React from 'react'

import { AnimePage } from '../pages'
import { AnimeList } from '../pages'
import { Login } from '../pages'
import { Join } from '../pages'

import { Flex } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

const App = () => {
  return (
    <Box>
      <Navigation />
      <Container maxW='container.xl'>
        <Flex
          minH='100vh'
          flexDir='row'
          overflow='hidden'
        >
          <Flex w='75%'>
            <Routes>
              <Route path='/*' element={<AnimeList />}></Route>
              <Route path='/anime/:slug' element={<AnimePage />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='join' element={<Join />}></Route>
            </Routes>
          </Flex>
          <Flex ml='5' w='25%' borderLeft='1px solid #292929'>
            <Updates />
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default App
