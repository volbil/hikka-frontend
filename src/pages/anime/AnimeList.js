import { useQuery } from '@tanstack/react-query'
import { SimpleGrid } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
import Anime from './components/Anime'
import axios from 'axios'

export async function apiSearch() {
  const { data } = await axios.post('https://api.hikka.io/search', {})
  return data
}

const AnimeList = () => {
  const { isLoading, isError, data, error } = useQuery(['animelist'], apiSearch)

  return (
    <Center pt={5} pb={5}>
      <SimpleGrid columns={4} spacing={10}>
        {data?.map(anime => (
          <Anime key={anime.reference} data={anime} />
        ))}
      </SimpleGrid>
    </Center>
  )
}

export default AnimeList
