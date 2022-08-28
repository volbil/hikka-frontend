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
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

const App = () => {
  return (
    <Box>
      <Box
        // position='fixed'
        bg='hblack'
        zIndex={999}
        borderBottom='1px solid #292929'
        // top={0}
        // left={0}
        // right={0}
        position='sticky'
        top={0}
      >
        <Navigation />
      </Box>

      <Grid
        templateColumns='repeat(14, 1fr)'
        gap={4}
      >
        <GridItem colSpan={1} />

        <GridItem colSpan={8}>
          <Routes>
            <Route path='/*' element={<AnimeList />}></Route>
            <Route path='/anime/:slug' element={<AnimePage />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='join' element={<Join />}></Route>
          </Routes>
        </GridItem>
        <GridItem colSpan={1} />
        <GridItem colSpan={3} borderLeft='1px solid #292929'>
          <Box
            height='calc(100vh - 74px)'
            overflow='hidden'
            position='sticky'
            top='74px'
            overflowY='scroll'
          >
            <Updates />
          </Box>
        </GridItem>

        <GridItem colSpan={1} />
      </Grid>
    </Box>
  )
}

export default App
