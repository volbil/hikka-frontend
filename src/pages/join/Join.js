import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Center } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useRef } from 'react'
import axios from 'axios'

export function apiJoin({ username, email, password }) {
  return axios.post('https://api.hikka.io/auth/join', {
    username, email, password
  })
}

const Join = () => {
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch
  } = useForm()

  const password = useRef({});
  password.current = watch('password', '')

  const mutation = useMutation(apiJoin, {
    onSuccess: () => {
      navigate('/login')
    }
  })

  function onSubmit(values) {
    // setLoading(true)

    mutation.mutate({
      'username': values.username,
      'email': values.email,
      'password': values.password
    })

    // setLoading(false)
  }

  return (
    <Center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={5} m={10} w="720px" borderWidth="1px" borderRadius="3px">
          <Box mb={5}>
            <Input
              errorBorderColor='red.300'
              placeholder='Username'
              type='text'
              {...register('username', {
                required: 'Username is required',
                minLength: { value: 6, message: 'Username must be at least 6 characters long' },
              })}
              isInvalid={errors.username}
            />
            <Text
              mt={1} display={!errors.username ? 'none' : 'block'}
              fontWeight='semibold'
              color='red.300'
            >{errors.username && errors.username.message}</Text>
          </Box>


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


          <Box mb={5}>
            <Input
              errorBorderColor='red.300'
              placeholder='Confirm password'
              type='password'
              {...register('passwordConfirm', {
                required: 'Confirm password is required',
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
              isInvalid={errors.passwordConfirm}
            />
            <Text
              mt={1} display={!errors.passwordConfirm ? 'none' : 'block'}
              fontWeight='semibold'
              color='red.300'
            >{errors.passwordConfirm && errors.passwordConfirm.message}</Text>
          </Box>


          <Button
            isLoading={isSubmitting}
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

export default Join
