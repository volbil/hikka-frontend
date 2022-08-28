import { Grid, GridItem } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Stars from './components/Stars'
import axios from 'axios'

import { Badge, Stack } from '@chakra-ui/react'

export function apiAnimeSlug(slug) {
  return axios.get('https://api.hikka.io/anime/details/' + slug).then((res) => res.data)
}

const AnimePage = () => {
  const { slug } = useParams()

  const { isLoading, isError, data } = useQuery(
    ['anime', slug], () => apiAnimeSlug(slug), {
      retry: false
    }
  )

  if (isLoading) return (
    <Box>Loading...</Box>
  )

  if (isError) return (
    <Box>Not found</Box>
  )

  return (
    <Grid
    h='200px'
    w='100%'
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(5, 1fr)'
    gap={4}
    pt={5}>
      <GridItem rowSpan={2} colSpan={1}>
        <Image maxW='320px' src={data.image} alt={data.title} />
      </GridItem>
      <GridItem colSpan={4}>
        <Box mb={2}>
          <Text fontSize='3xl' fontWeight='semibold' as='h1'>{ data.title }</Text>
          <Text fontSize='sm' as='h2' mb={1}>{ data.title_jp } | { data.title_en }</Text>
          <Stars score={data.score} />
        </Box>

        <Box mb={2}>
          <Text>Тип: { data.release }</Text>
          <Text>Епізоди: { data.episodes }</Text>
          <Text>Джерело: { data.source }</Text>
          <Text>Cезон: { data.season } { data.year }</Text>
          <Text>Рейтинг: { data.rating }</Text>
          <Text>Статус: { data.status }</Text>
        </Box>

        <Box mb={2}>
          <Text maxW='100%'>
            { data.description }
          </Text>
        </Box>

        <Box mb={2}>
          <Stack direction='row'>
            {data.genres?.map(genre => (
              <Badge key={genre}>{genre}</Badge>
            ))}
          </Stack>
        </Box>

        <Box mb={2}>
          <Stack direction='row'>
            {data.producers?.map(producer => (
              <Badge key={producer}>{producer}</Badge>
            ))}
          </Stack>
        </Box>

      </GridItem>
    </Grid>
  )
}

export default AnimePage
