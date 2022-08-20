import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Center } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import globalState from '../../state'
import axios from 'axios'

export function apiLogin({ email, password }) {
  return axios.post('https://api.hikka.io/auth/login', {
    email, password
  })
}

const Login = () => {
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const mutation = useMutation(apiLogin, {
    onSuccess: ({ data }) => {
      console.log(data.secret)
      globalState.secret = data.secret
      navigate('/')
    }
  })

  function onSubmit(values) {
    mutation.mutate({
      'password': values.password,
      'email': values.email
    })
  }

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={5} m={10} w="720px" borderWidth="1px" borderRadius="3px">
          <Box mb={5}>
            <Input
              errorBorderColor='red.300'
              placeholder='Email'
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
              })}
              isInvalid={errors.email}
            />
            <Text
              mt={1} display={!errors.email ? 'none' : 'block'}
              fontWeight='semibold'
              color='red.300'
            >{errors.email && errors.email.message}</Text>
          </Box>


          <Box mb={5}>
            <Input
              errorBorderColor='red.300'
              placeholder='Password'
              type='password'
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters long' },
              })}
              isInvalid={errors.password}
            />
            <Text
              mt={1} display={!errors.password ? 'none' : 'block'}
              fontWeight='semibold'
              color='red.300'
            >{errors.password && errors.password.message}</Text>
          </Box>


          <Button
            isLoading={mutation.isLoading}
            w="100%" colorScheme='blue'
            type='submit'
          >
            Submit
          </Button>
        </Box>
      </form>
    </Center>
  )
}

export default Login
