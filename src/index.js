import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './app'

import { extendTheme } from '@chakra-ui/react'
import '@fontsource/montserrat/900.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/400.css'
// import '@fontsource/nunito-sans/400.css'

const container = document.getElementById("root")
const root = createRoot(container)

// Create a client
const queryClient = new QueryClient()

const theme = extendTheme({
  fonts: {
    logo: `'Montserrat', sans-serif`,
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
    // heading: `'Nunito Sans', sans-serif`,
    // body: `'Nunito Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: '#000000',
        color: '#979797',
        // marginTop: '74px'
      },
      h1: {
        color: 'white'
      },
      h5: {
        color: 'white'
      }
    },
  },
  colors: {
    hblack: '#000000'
  }
})

root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App/>
      </ChakraProvider>
    </QueryClientProvider>
  </Router>
)
