import React, { FC } from 'react'
import { ImageSourcePropType, View } from 'react-native';
import AwesomeButton from '../AwesomeButton/Button.component'
import { StyledImage, StyledViewColor } from './ImageButton.styled';

interface ImageButtonProps{
    onPress:()=>void;
    src?:ImageSourcePropType;
    color?:string;
    icon?:boolean;
    raise?:boolean;
    rounded?:boolean;
}

const ImageButton:FC<ImageButtonProps> = ({onPress,src=1, color='white', icon=false, raise=false, rounded=false}) => {
  return (
    <AwesomeButton raiseLevel={raise?15:6} backgroundColor='white' backgroundActive='#898989' backgroundDarker='#b40000' onPress={onPress} width={!icon?300:100} height={!icon?300:100} rounded>
        {src!=1 ?<StyledImage resizeMode="contain" source={src} />:<StyledViewColor color={color}/>}
    </AwesomeButton>
  )
}

export default ImageButton