import { AspectRatio } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Anime = ({ data }) => {
  return (
    <Box>
      <Link to={'/anime/' + data.slug}>
        <AspectRatio ratio={3 / 4}>
          <Image borderRadius='md' src={data.image} alt={data.title} />
        </AspectRatio>
      </Link>
      <Text mt={1} fontWeight='600' as='h5'>{data.title}</Text>
    </Box>
  )
}

export default Anime
