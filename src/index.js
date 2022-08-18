import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './app'

const container = document.getElementById("root")
const root = createRoot(container)

// Create a client
const queryClient = new QueryClient()

root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </QueryClientProvider>
  </Router>
)
