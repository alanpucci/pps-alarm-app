import React, { FC } from 'react'
import { ImageProps } from 'react-native'
import { StyledImage } from './Image.styled'

interface Props extends ImageProps{

}

const Image:FC<Props> = ({...props}) => {
  return (
      <StyledImage {...props} />
  )
}

export default Image