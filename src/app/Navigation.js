import { Link } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import React from 'react'

const Navigation = () => {
	return (
		<Box bg='gray.800' color='white' p={5}>
			<Link to='/'>Hikka</Link>
		</Box>
	)
}

export default Navigation
