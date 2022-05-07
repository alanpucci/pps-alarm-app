import React, { FC } from 'react'
import { StyledInput } from './Input.styled';

const Input = ({...props}) => {
  return (
    <StyledInput
      underlineColor="#f41d1d"
      activeUnderlineColor="#b40000"
      {...props}
    />
  )
}

export default Input