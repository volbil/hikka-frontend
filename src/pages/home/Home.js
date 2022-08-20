import globalState from '../../state'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    console.log(globalState.secret)
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home
