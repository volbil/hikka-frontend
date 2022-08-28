import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'

import { Input } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

import { Container } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import ava from '../assets/ava.png'

const Navigation = () => {
  return (
    <Box bg='#000000' color='white' borderBottom='1px solid #292929'>
      <Container maxW='container.xl'>
        <Flex alignItems='center' pt='15px' pb='15px'>
          <Text
            lineHeight={1}
            fontFamily='logo'
            fontWeight={900}
            fontSize={34}
            mr='45px'
          ><Link to='/'>hikka.</Link></Text>
          
          <Input
            placeholder='Пошук...'
            borderColor='#292929'
            borderRadius='10px'
            maxW='100%'
            backgroundColor='#131313'
          />

          <Spacer />

          <Box ml='45px' mr='45px'>
            <Text>
              <Link to='/'>Аніме</Link>
            </Text>
          </Box>

          <Spacer />

          <Image
            src={ava}
            boxSize='44px'
            borderRadius='10px'
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navigation
