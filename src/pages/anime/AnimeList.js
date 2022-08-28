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
    <SimpleGrid columns={4} spacing={10} pt={5} pb={5}>
      {data?.map(anime => (
        <Anime key={anime.reference} data={anime} />
      ))}
    </SimpleGrid>
  )
}

export default AnimeList
