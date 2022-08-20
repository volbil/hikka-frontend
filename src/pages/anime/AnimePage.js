import { Grid, GridItem } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import axios from 'axios'

export function apiAnimeSlug(slug) {
  return axios.get('https://api.hikka.io/anime/details/' + slug).then((res) => res.data)
}

const AnimePage = () => {
  const { slug } = useParams()

  const { isLoading, isError, data, error } = useQuery(
    ['anime', slug], () => apiAnimeSlug(slug), {
      retry: false
    }
  )

  if (isLoading) return (
    <Box>Loading...</Box>
  )

  if (error) return (
    <Box>Not found</Box>
  )

  return (
    <Center>
      <Grid
      h='200px'
      w='100%'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      p={5}>
        <GridItem rowSpan={2} colSpan={1}>
          <Image maxW='320px' src={data.image} alt={data.title} />
        </GridItem>
        <GridItem colSpan={4}>
          <Box mb={2}>
            <Text fontSize='3xl' fontWeight='semibold' as='h1'>{ data.title }</Text>
            <Text fontSize='sm' as='h2'>{ data.title_jp } | { data.title_en }</Text>
          </Box>
          <Box>
            <Text>
              { data.description }
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  )
}

export default AnimePage
