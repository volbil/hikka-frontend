import { Center } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const doLogin = async (e) => {
    e.preventDefault()

    setLoading(true)

    await axios.post('https://api.hikka.io/auth/login', {
      email, password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function ({ response }) {
      console.log(response.data);
    })

    setLoading(false)
  }

  return (
    <Center>
      <Box p={5} m={10} w="720px" borderWidth="1px" borderRadius="3px">
        <Input mb={5} placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
        <Input mb={5} placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
        <Button isLoading={loading} w="100%" colorScheme='blue' onClick={(e) => doLogin(e)}>Submit</Button>
      </Box>
    </Center>
  )
}

export default Login
