import { Wrap, WrapItem } from '@chakra-ui/react'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsStar } from 'react-icons/bs'
import { Text } from '@chakra-ui/react'
import React from 'react'

const Stars = ({ score }) => {
  const ratingStars = (score) => {
    const rating = Math.floor(score) / 2
    const ratingInt = parseInt(rating)
    let stars = []

    for (let step = 0; step < ratingInt; step++)
      stars.push(<BsStarFill />)
    
    if (rating % 1 !== 0)
      stars.push(<BsStarHalf />)

    for (let step = 0; step < 5 - stars.length; step++)
      stars.push(<BsStar />)

    return stars
  }

  const ratingText = (score) => {
    const rating = Math.floor(score)

    switch (rating) {
      case 10:
        return 'Шедевр'
      case 9:
        return 'Чудово'
      case 8:
        return 'Дуже добре'
      case 7:
        return 'Добре'
      case 6:
        return 'Може бути'
      case 5:
        return 'Середнячок'
      case 4:
        return 'Погане'
      case 3:
        return 'Дуже погане'
      case 2:
        return 'Жах'
      case 1:
        return 'Сміття'
      default:
        return ''
    }
  }

  return (
    <Wrap align='center'>
      {ratingStars(score)?.map((icon, index) => (
        <WrapItem
          fontSize={23}
          color='white'
          key={index}>
            { icon }
        </WrapItem>
      ))}

      <WrapItem>
        <Text as='span' fontWeight='semibold' lineHeight={1}>
          { score } { ratingText(score) }
        </Text>
      </WrapItem>
    </Wrap>
  )
}

export default Stars
