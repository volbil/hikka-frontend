import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App'

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <Router>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </Router>
)
