import { Center } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

// import ErrorText from '../../components/common/ErrorText'
// import apiJoin from '../../requests'

const Join = () => {
  const [loading, setLoading] = useState(false)

  const [values, setValues] = useState({
    username: '', email: '', password: '', passwordConfirm: ''
  })

  const [valid, setValuesValid] = useState({
    username: true, email: true, password: true, passwordConfirm: true
  })

  const setValue = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  }

  const setValid = (name, valid) => {
    setValuesValid(oldValues => ({...oldValues, [name]: valid }));
  }

  const doJoin = async (e) => {
    e.preventDefault()

    setLoading(true)

    if (values.password < 6)
      setValid('username', false)

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(values.email) === false)
      setValid('email', false)

    if (values.password < 9)
      setValid('password', false)

    if (values.passwordConfirm !== values.password)
      setValid('passwordConfirm', false)

    if (valid.username && valid.email && valid.password && valid.passwordConfirm) {
      await axios.post('https://api.hikka.io/auth/join', {
        'username': values.username,
        'email': values.email,
        'password': values.password
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function ({ response }) {
          console.log(response.data);
        })
    }

    setLoading(false)
  }

  return (
    <Center>
      <Box p={5} m={10} w="720px" borderWidth="1px" borderRadius="3px">
        <Box mb={5}>
          <Input
            errorBorderColor='red.300'
            placeholder='Username'
            type='text'
            onChange={setValue('username')}
            isInvalid={!valid.username}
          />
          {/* <ErrorText invalid={!valid.username}>
            Username must be at least 6 characters long
          </ErrorText> */}
        </Box>


        <Box mb={5}>
          <Input
            errorBorderColor='red.300'
            placeholder='Email'
            type='email'
            onChange={setValue('email')}
            isInvalid={!valid.email}
          />
          {/* <ErrorText invalid={!valid.email}>
            Invalid email
          </ErrorText> */}
        </Box>


        <Box mb={5}>
          <Input
            errorBorderColor='red.300'
            placeholder='Password'
            type='password'
            onChange={setValue('password')}
            isInvalid={!valid.password}
          />
          {/* <ErrorText invalid={!valid.password}>
            Password must be at least 8 characters long
          </ErrorText> */}
        </Box>


        <Box mb={5}>
          <Input
            errorBorderColor='red.300'
            placeholder='Confirm password'
            type='password'
            onChange={setValue('passwordConfirm')}
            isInvalid={!valid.passwordConfirm}
          />
          {/* <ErrorText invalid={!valid.passwordConfirm}>
            Passwords don't match
          </ErrorText> */}
        </Box>


        <Button
          isLoading={loading}
          w="100%" colorScheme='blue'
          onClick={(e) => doJoin(e)}
        >
          Submit
        </Button>
      </Box>
    </Center>
  )
}

export default Join
