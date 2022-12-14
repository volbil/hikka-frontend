import { Grid, GridItem } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Stars from './components/Stars'
import axios from 'axios'

import { Button } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'

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
    <Box>
      <Grid
        templateColumns='repeat(8, 1fr)'
        gap={4}
        pt={150}
        pb={150}
      >
        <GridItem colSpan={3}>
          <Image src={data.image} alt={data.title} />
        </GridItem>
        <GridItem colSpan={5}>
          <Text fontSize='3xl' fontWeight='semibold' as='h1'>{ data.title }</Text>
          <Text fontSize='sm' as='h2' mb={1}>{ data.title_jp } | { data.title_en }</Text>
          <Stars score={data.score} />
          <Text mt={5} mb={5}>
            { data.description }
          </Text>

          <Box>
            <Button p={0} mr='20px' borderRadius={90} variant='outline'>
              <Text color='white'><FiHeart /></Text>
            </Button>
            <Button borderRadius={90} variant='outline'>
              <Text color='white'>Дивився</Text>
            </Button>
          </Box>
        </GridItem>
      </Grid>

      <Text mt={5} mb={5} fontSize='3xl' fontWeight='semibold' as='h1'>Про аніме</Text>

      <Grid
        templateColumns='repeat(8, 1fr)'
        gap={4}
        mb={5}
      >
        <GridItem colSpan={3}>
          Продюсери
        </GridItem>
        <GridItem colSpan={5}>
          {data.producers?.map(producer => (
            <Badge mr={1} key={producer}>{producer}</Badge>
          ))}
        </GridItem>

        <GridItem colSpan={3}>
          Тип
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.release }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Епізоди
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.episodes }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Джерело
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.source }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Сезон
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.season } { data.year }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Рейтинг
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.rating }
          </Text>
        </GridItem>

        <GridItem colSpan={3}>
          Статус
        </GridItem>
        <GridItem colSpan={5}>
          <Text color='white'>
            { data.status }
          </Text>
        </GridItem>
      </Grid>
    </Box>

    //     <Box mb={2}>
    //       <Stack direction='row'>
    //         {data.genres?.map(genre => (
    //           <Badge key={genre}>{genre}</Badge>
    //         ))}
    //       </Stack>
    //     </Box>

    //     <Box mb={2}>
    //       <Stack direction='row'>
    //         {data.producers?.map(producer => (
    //           <Badge key={producer}>{producer}</Badge>
    //         ))}
    //       </Stack>
    //     </Box>
    // </Box>
  )
}

export default AnimePage
