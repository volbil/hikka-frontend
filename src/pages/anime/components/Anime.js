import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Anime = ({ data }) => {
  return (
    <Box maxW='320px'>
      <Link to={'/anime/' + data.slug}>
        <Image borderRadius='md' src={data.image} alt={data.title} />
      </Link>
      <Text mt={1} fontWeight='600' as='h5'>{data.title}</Text>
    </Box>
  )
}

export default Anime
