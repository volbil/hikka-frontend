import { Text } from '@chakra-ui/react'

const ErrorText = ({ invalid, children }) => {
  return (
    <Text
      mt={1}
      display={!invalid ? 'none' : 'block'}
      fontWeight='semibold'
      color='red.300'
    >{children}</Text>
  )
}

export default ErrorText
