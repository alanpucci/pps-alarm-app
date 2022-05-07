import React, { FC } from 'react'
import { StyledSubtitle, StyledText, StyledView } from './Logo.styled'

interface LogoProps{
  title:string;
  subtitle?:string;
}

const Logo:FC<LogoProps> = ({title,subtitle}) => {
  return (
    <StyledView>
      <StyledText>{title}</StyledText>
      {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
    </StyledView>
  )
}

export default Logo